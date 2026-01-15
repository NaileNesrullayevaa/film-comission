import React, { useEffect, useState } from 'react'
import hero from '../../assets/imgs/hero.png'
import './home.scss'
import color from '../../assets/imgs/color.png'
import vector from '../../assets/imgs/vector.png'
import mission2 from '../../assets/imgs/mission2.png'
import service1 from '../../assets/svgs/service1.svg'
import service2 from '../../assets/svgs/service2.svg'
import service3 from '../../assets/svgs/service3.svg'
import service4 from '../../assets/svgs/service4.svg'
import service5 from '../../assets/svgs/service5.svg'
import service6 from '../../assets/svgs/service6.svg'
import location from '../../assets/imgs/location.png'
import map from '../../assets/imgs/map.png'
import { SwiperSlide, Swiper } from 'swiper/react'
import { motion } from 'framer-motion'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import video from '../../assets/video/hero.mp4'
import { getContactAsync, getFileAsync, getGalleryAsync } from '../../redux/slices/mainSlice'
import { useDispatch, useSelector } from 'react-redux'
const Home = () => {
  const dispatch = useDispatch()
  const galleries = useSelector(state => state.main.gallery)
  useEffect(() => {
    dispatch(getGalleryAsync())
  }, [dispatch])

  const [number, setNumber] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setNumber(prev => {
        if (prev === 200) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 4);
    return () => clearInterval(timer);
  }, []);
  
  const [numberTwo, setNumberTwo] = useState(0);
  useEffect(() => {
    const timerTwo = setInterval(() => {
      setNumberTwo(prev => {
        if (prev === 9) {
          clearInterval(timerTwo);
          return prev;
        }
        return prev + 1;
      });
    }, 120);
    return () => clearInterval(timerTwo);
  }, []);


  const [numberThree, setNumberThree] = useState(0);
  useEffect(() => {
    const timerThree = setInterval(() => {
      setNumberThree(prev => {
        if (prev === 11) {
          clearInterval(timerThree);
          return prev;
        }
        return prev + 1;
      });
    }, 120);
    return () => clearInterval(timerThree);
  }, []);


  const [currentText, setCurrentText] = useState("");
  const [text, setText] = useState("Your Favoutite Filming Destination");
  const [index, setIndex] = useState(0);
  const speed = 100
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => prev + text[index]);
      setIndex(prev => prev + 1);
    }, speed);
    if (index === text.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [index, text, speed]);

  const [currentTextTwo, setCurrentTextTwo] = useState("");
  const [textTwo, setTextTwo] = useState("Why Azerbaijan");
  const [indexTwo, setIndexTwo] = useState(0);
  const speedTwo = 100
  useEffect(() => {
    const intervalTwo = setInterval(() => {
      setCurrentTextTwo(prev => prev + textTwo[indexTwo]);
      setIndexTwo(prev => prev + 1);
    }, speedTwo);
    if (indexTwo === textTwo.length) {
      clearInterval(intervalTwo);
    }
    return () => clearInterval(intervalTwo);
  }, [indexTwo, textTwo, speedTwo]);

  const [currentTextThree, setCurrentTextThree] = useState("");
  const [textThree, setTextThree] = useState("Gallery");
  const [indexThree, setIndexThree] = useState(0);
  const speedThree = 100
  useEffect(() => {
    const intervalThree = setInterval(() => {
      setCurrentTextThree(prev => prev + textThree[indexThree]);
      setIndexThree(prev => prev + 1);
    }, speedThree);
    if (indexThree === textThree.length) {
      clearInterval(intervalThree);
    }
    return () => clearInterval(intervalThree);
  }, [indexThree, textThree, speedThree]);

  const [show, setShow] = useState(false)
  console.log(show)
  return (
    <div>
      <div className="hero" id='hero'>
        <video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="text-box">
          <h1>{currentText}</h1>
          <div className="right">
            <img src={color} alt="" />
            <div className="big">
              <img src={vector} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="mission" id='mission'>
        <div className="box">
          <motion.div className="text-box"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5
            }}>
            <h2>MISSION</h2>
            <p className='about'>About</p>
          </motion.div>
          <motion.div className="img-box"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.25
            }}>
            <img src={mission2} alt="" />
          </motion.div>
          <motion.p className='text' initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}>To promote Azerbaijan as a prime filming destination, facilitating international collaborations, supporting local talent, and providing streamlined production services.</motion.p>
        </div>
      </section>
      <section className="object" id='object'>
        <motion.h2 className='title'
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.5
          }}>Objectives</motion.h2>
        <motion.hr initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.5
          }} />
        <div className="back">
          <div className="boxes">
            <motion.div
              className="box"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5
              }}
            >
              <div className="img-box">
                <img src={service1} alt="" />
              </div>
              <h2>Promote Azerbaijan internationally</h2>
              <p>As a dynamic and diverse filming destination through strategic partnerships, marketing, and global outreach.</p>
            </motion.div>
            <motion.div
              className="box"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.25
              }}
            >
              <div className="img-box">
                <img src={service2} alt="" />
              </div>
              <h2>Facilitate film production</h2>
              <p>By providing a clear, efficient process for permits, logistics, and access to local services.</p>
            </motion.div>
            <motion.div
              className="box"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5
              }}
            >
              <div className="img-box">
                <img src={service3} alt="" />
              </div>
              <h2>Encourage international collaborations</h2>
              <p>And co-productions that contribute to the growth of Azerbaijan’s film industry.</p>
            </motion.div>

            <motion.div className={`box ${show == true ? 'active' : ''}`}
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.75
              }}>
              <div className="img-box">
                <img src={service4} alt="" />
              </div>
              <h2>Support local talent and infrastructure</h2>
              <p>To strengthen the national production ecosystem and align it with global standards.</p>
            </motion.div>
            <motion.div className={`box ${show == true ? 'active' : ''}`}
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1
              }}>
              <div className="img-box">
                <img src={service5} alt="" />
              </div>
              <h2>Showcase the country’s natural and cultural diversity</h2>
              <p>By attracting projects that highlight Azerbaijan’s landscapes, architecture, and heritage.</p>
            </motion.div>
            <motion.div className={`box ${show == true ? 'active' : ''}`}
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.25
              }}>
              <div className="img-box">
                <img src={service6} alt="" />
              </div>
              <h2>Contribute to economic and cultural development</h2>
              <p>Through sustainable film tourism and creative industry growth.</p>
            </motion.div>
          </div>
        </div>
        {show == true ? <button onClick={() => setShow(false)}><span>SHOW Less</span></button> : <button onClick={() => setShow(true)}><span>SHOW MORE</span></button>}
      </section>
      <section className="gallery" id='gallery'>
        <div className="content">
          <h1>{currentTextThree}</h1>
          <motion.div className="boxes"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,

            }}>
            <div className="one">
              <div className="img-box">
                <img src={galleries?.payload?.image_1} alt="" />
              </div>
              <div className="img-box">
                <img src={galleries?.payload?.image_2} alt="" />
              </div>
            </div>
            <div className="two">
              <div className="img-box">
                <img src={galleries?.payload?.image_3} alt="" />
              </div>
              <div className="img-box">
                <img src={galleries?.payload?.image_4} alt="" />
              </div>
              <div className="img-box">
                <img src={galleries?.payload?.image_5} alt="" />
              </div>
            </div>
            <div className="three">
              <div className="img-box">
                <img src={galleries?.payload?.image_6} alt="" />
              </div>
              <div className="img-box">
                <img src={galleries?.payload?.image_7} alt="" />
              </div>
              <div className="img-box">
                <img src={galleries?.payload?.image_8} alt="" />
              </div>
            </div>
            <div className="four">
              <div className="img-box">
                <img src={galleries?.payload?.image_9} alt="" />
              </div>
              <div className="img-box">
                <img src={galleries?.payload?.image_10} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="map" id='map'>
        <div className="content">
          <motion.h1 initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,

            }}>Map of <span>Azerbaijan</span></motion.h1>
          <motion.div className="img-box" initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.15
            }}>
            <img src="https://film-commission.vercel.app/assets/map11-CfbhLpij.png" alt="" />
          </motion.div>
        </div>

      </section>
      <section className="why" id='why'>
        <div className="text">
          <h1>{currentTextTwo}</h1>
          <div className="count">
            <div className="sunny">
              <span>{number}</span><span className='plus'>+</span>
              <p>Sunny days</p>
            </div>
            <div className="climate">
              <span>{numberTwo} </span><span>out of</span><span> {numberThree}</span>
              <p>Climate zones</p>
            </div>
          </div>

        </div>
        <div className="cast">
          <motion.h2
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
            }}>Multicultural <span>Cast</span> </motion.h2>
          <div className="boxes">
            <div className="img-box">
              <motion.img src="https://film-commission.vercel.app/assets/cast1-B1GqNggs.png" alt=""
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.25
                }} />
            </div>
            <div className="img-box">
              <motion.img src="https://film-commission.vercel.app/assets/cast2-CBT_WZu3.png" alt=""
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5
                }} />
            </div>
            <div className="img-box">
              <motion.img src="https://film-commission.vercel.app/assets/cast3-ClHDICR9.png" alt=""
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.75
                }} />
            </div>
            <div className="img-box">
              <motion.img src="https://film-commission.vercel.app/assets/cast4-C577UMQp.png" alt="" initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1
                }} />
            </div>
          </div>
        </div>
      </section>
      <section className="table">
        <div className="content">
          <motion.div className="box"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
            }}>
            <p>Film-Friendly Policies</p>
          </motion.div>
          <motion.div className="box"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.25
            }}>
            <p>Budget-Friendly</p>
          </motion.div>
          <motion.div className="box"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5
            }}>
            <p>Easy Permits</p>
          </motion.div>
          <motion.div className="box"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.75
            }}>
            <p>Undiscovered Locations</p>
          </motion.div>
          <motion.div className="box"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1
            }}>
            <p>Infrastructure Diversity</p>
          </motion.div>
          <motion.div className="box"
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.25
            }}>
            <p>Multilingual Crew</p>
          </motion.div>
        </div>
      </section>
      <section className="table-mobile">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={24}
          slidesPerView={1.2}

          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            576: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="content"
        >
          <SwiperSlide>
            <div className="box">
              <p>Film-Friendly Policies</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box">
              <p>Budget-Friendly</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box">
              <p>Easy Permits</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box">
              <p>Undiscovered Locations</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box">
              <p>Infrastructure Diversity</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box">
              <p>Multilingual Crew</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="service" id='service'>
        <h1>
          <span>What</span>
          <span>we</span>
          <span>Offer</span>
        </h1>
        <div className="text">
          <motion.h2
            initial={{ y: 40 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
            }}>One-Stop Turnkey Service</motion.h2>
          <div className="boxes">
            <motion.div className="box"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2
              }}>
              <p>Location scouting</p>
            </motion.div>
            <motion.div className="box"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.25
              }}>
              <p>Equipment rental from lens till drone</p>
            </motion.div>
            <motion.div className="box"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5
              }}>
              <p>Casting</p>
            </motion.div>
            <motion.div className="box"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.75
              }}>
              <p>Transportation</p>
            </motion.div>
            <motion.div className="box"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1
              }}>
              <p>Catering</p>
            </motion.div>
            <motion.div className="box"
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.25
              }}>
              <p>Post-production</p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="service-mobile">
        <div className="text">
          <h2>One-Stop Turnkey Service</h2>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={24}
            slidesPerView={1.2}

            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              576: {
                slidesPerView: 1.2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="boxes"
          >
            <SwiperSlide>
              <div className="box">
                <p>Location scouting</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <p>Equipment rental from lens till drone</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <p>Casting</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <p>Transportation</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <p>Catering</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="box">
                <p>Post-production</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="done">
        <h1>Have any amazing projects
          need to be <span>done?</span></h1>
        <button><Link to='login'><span>Apply for Project</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M18 6H9M18 6V15" stroke="#121212" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></Link></button>
      </section>
    </div>
  )
}

export default Home