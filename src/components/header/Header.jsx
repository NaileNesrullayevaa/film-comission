import React, { useEffect, useState } from 'react'
import './header.scss'
import lang from '../../assets/svgs/lang.svg'
import arrow from '../../assets/svgs/arrow.svg'
import main from '../../assets/svgs/main.svg'
import { Link } from 'react-router-dom'
import { Select } from 'antd'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { getFileAsync } from '../../redux/slices/mainSlice'
const Header = () => {
  const dispatch=useDispatch()
  const file = useSelector(state => state?.main?.file)
  console.log(file?.payload?.url)
  useEffect(() => {
    dispatch(getFileAsync())
  }, [dispatch])

  const [isScrolled, setIsScrolled] = useState(false);
  const [subMenu, setSubMenu] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [active, setActive] = useState(null)
  const [menu, setMenu] = useState(false)
  const handleLang = value => {
    console.log(`selected ${value}`);
  };

  const handleClick = (newValue) => {
    setSubMenu(prev => (prev === newValue ? null : newValue));
  };


  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollTop / docHeight) * 100;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "4px",
    backgroundColor: "#e5e7eb",
    zIndex: 9999,
  };

  const barStyle = {
    height: "100%",
    backgroundColor: "#915921",
    transition: "width 0.1s linear",
  };

  return (
    <>
      <div style={containerStyle}>
        <div
          style={{
            ...barStyle,
            width: `${scroll}%`,
          }}
        />
      </div>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <motion.div className="left-box"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.5,

          }}>
          <img src={main} alt="" />
        </motion.div>
        <motion.ul
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.5,

          }}>
          <li ><a href='#hero' onMouseEnter={() => handleClick('home')}>Home</a></li>
          <li><Link onMouseEnter={() => handleClick('about')}>About</Link>
            <ul className={`one ${subMenu == 'about' ? 'active' : ''}`}>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#object">Objectives</a></li>
            </ul>
          </li>
          <li><Link onMouseEnter={() => handleClick('film')} onClick={() => setActive('c')} className={`${active == 'c' ? 'active' : ''}`}>FilmAid: Permits & Incentives</Link>
            <ul className={`${subMenu == 'film' ? 'active' : ''}`}>
              <li><a href={file?.payload?.url} target='_blank'>{file?.payload?.title}</a></li>

            </ul>
          </li>
          <li><Link onMouseEnter={() => handleClick('location')}>Locations</Link>
            <ul className={` two ${subMenu == 'location' ? 'active' : ''}`}>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#map">Map of Azerbaijan</a></li>
              <li><a href="#why">Why Azerbaijan ?</a></li>
            </ul>
          </li>
          <li><Link onMouseEnter={() => handleClick('production')}>Production services</Link>
            <ul className={`${subMenu == 'production' ? 'active' : ''}`}>
              <li><a href="#service">What we offfer</a></li>
            </ul>
          </li>
          <li><a href='#footer' onMouseEnter={() => handleClick('home')}>Contact us</a></li>
        </motion.ul>
        <motion.div className="right-box"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.5,

          }}>
          <div className="left">
            <img src={lang} alt="" />
            <Select
              defaultValue="az"
              style={{ width: 60 }}
              onChange={handleLang}
              options={[
                { value: 'az', label: 'Az' },
                { value: 'en', label: 'En' },
                { value: 'ru', label: 'Ru' },
              ]}
            />
          </div>
          <hr />
          <button>
            <Link to='login'>
              <p>Apply for project</p>
              <img src={arrow} alt="" />
            </Link>
          </button>
        </motion.div>
      </header>
      <div className={`header-mini ${isScrolled ? "scrolled" : ""}`}>
        <div className="left-box">
          <img src={main} alt="" />
        </div>
        <div className="right-box">
          <IoIosMenu onClick={() => setMenu(true)} />
        </div>
      </div>
      <div className={`mobile ${menu == true ? 'active-mobile' : ''}`}>
        <div className="top-box">
          <div className="left-box">
            <img src={main} alt="" />
          </div>
          <div className="right-box">
            <IoMdClose className={`close ${menu == true ? 'rotate' : ""}`} onClick={() => setMenu(false)} />
          </div>
        </div>
        <div className="bottom-box">
          <ul>
            <li><a href='#hero' onClick={() => { setActive('a'), setMenu(false) }} className={`${active == 'a' ? 'active' : ''}`}>Home</a></li>
            <li><div className="icon"><Link onClick={() => handleClick('about')}>About</Link>{subMenu == 'about' ? <span onClick={() => handleClick('')}>-</span> : <span onClick={() => handleClick('about')}>+</span>} </div>
              <ul className={`${subMenu == 'about' ? 'active' : ''}`}>
                <li><a onClick={() => setMenu(false)} href="#mission">Mission</a></li>
                <li><a onClick={() => setMenu(false)} href="#object">Objectives</a></li>
              </ul>
            </li>
            <li><div className="icon"><Link onClick={() => handleClick('film')}>FilmAid: Permits & Incentives</Link> {subMenu == 'film' ? <span onClick={() => handleClick('')}>-</span> : <span onClick={() => handleClick('film')}>+</span>} </div>
              <ul className={`${subMenu == 'film' ? 'active' : ''}`}>
                <li><a href={file?.payload?.url} target='_blank'>{file?.payload?.title}</a></li>
              </ul>
            </li>
            <li><div className="icon"><Link onClick={() => handleClick('location')}>Locations</Link>{subMenu == 'location' ? <span onClick={() => handleClick('')}>-</span> : <span onClick={() => handleClick('location')}>+</span>} </div>
              <ul className={`${subMenu == 'location' ? 'active' : ''}`}>
                <li><a onClick={() => setMenu(false)} href="#gallery">Gallery</a></li>
                <li><a onClick={() => setMenu(false)} href="#map">Map of Azerbaijan</a></li>
                <li><a onClick={() => setMenu(false)} href="#why">Why Azerbaijan?</a></li>
              </ul>
            </li>
            <li><div className="icon"><Link onClick={() => handleClick('production')}>Production services</Link>{subMenu == 'production' ? <span onClick={() => handleClick('')}>-</span> : <span onClick={() => handleClick('production')}>+</span>} </div>
              <ul className={`${subMenu == 'production' ? 'active' : ''}`}>
                <li><a onClick={() => setMenu(false)} href="#service">What we offer</a></li>
              </ul>
            </li>
            <li><a href='#footer' onClick={() => { setActive('f'), setMenu(false) }} className={`${active == 'f' ? 'active' : ''}`}>Contact us</a></li>
          </ul>
          <div className="right-box">
            <div className="left">
              <span><MdLanguage /></span>

              <Select
                defaultValue="az"
                style={{ width: 70 }}
                onChange={handleLang}
                options={[
                  { value: 'az', label: 'Az' },
                  { value: 'en', label: 'En' },
                  { value: 'ru', label: 'Ru' },
                ]}
              />
            </div>
            <button>
              <Link>
                <p>Apply for project</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M18 6H9M18 6V15" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
                {/* <img src={arrow} alt="" /> */}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Header

