import React, { useEffect, useState } from 'react'
import './footer.scss'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { getContactAsync } from '../../redux/slices/mainSlice'
const Footer = () => {
    const dispatch = useDispatch()
    const contact = useSelector(state => state.main.contact)
    console.log(contact)
    useEffect(() => {
            dispatch(getContactAsync())
    }, [dispatch])
    const [scrolling, setScrolling] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])
    return (
        <footer className="footer" id='footer'>
            <div className="top">
                <motion.div className="logo"

                    initial={{ y: 40 }}
                    whileInView={{ y: 0 }}
                    transition={{
                        duration: 0.5,

                    }}>
                    <img src="https://film-commission.vercel.app/assets/logo-But-AAMX.svg" alt="" />
                </motion.div>
                <motion.div className="right"
                    initial={{ y: 40 }}
                    whileInView={{ y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.25
                    }}>
                    <div className="address">
                        <h3>Address</h3>
                        <a href={contact?.payload?.address_link} target='_blank'>{contact?.payload?.address}</a>
                    </div>
                    <div className="contact">
                        <h3>Contact</h3>
                        <p><span>Tel:</span> <a href="tel:+994 55 626 16 47">{contact?.payload?.phone_number}</a></p>
                        <p><span>Email:</span><a href="mailto:arka@culture.gov.az">{contact?.payload?.email}</a></p>
                    </div>
                </motion.div>
            </div>
            <motion.hr
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.5

                }} />
            <motion.div className="bottom"
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.75

                }}>
                <p>Copyright © filmcommission 2025. All Rights Reserved.</p>
                <div className={`icons ${scrolling ? 'active' : ''}`} onClick={scrollToTop}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="50"
                        height="50"
                        preserveAspectRatio="xMidYMid meet"
                        style={{
                            width: '50px',
                            height: '50px',
                            transform: 'translate3d(0,0,0)',
                        }}
                    >
                        <defs>
                            <clipPath id="lottie_clip">
                                <rect width="512" height="512" x="0" y="0" />
                            </clipPath>
                        </defs>

                        <g clipPath="url(#lottie_clip)">
                            <g
                                transform="matrix(0,-0.8,0.8,0,256,205.5973)"
                                opacity="1"
                                style={{ display: 'block' }}
                            >
                                <g transform="scale(0.9)">
                                    <g transform="scale(3)">
                                        <path
                                            fill="#fff"
                                            fillOpacity="1"
                                            d="M-28.666 41.452 L2.247 0 L-28.666 -41.452 H13.138 L44.051 0 L13.138 41.452 Z"
                                        />
                                    </g>
                                </g>
                            </g>

                            <g
                                transform="matrix(0,-0.8,0.8,0,256,348.6627)"
                                opacity="1"
                                style={{ display: 'block' }}
                            >
                                <g transform="scale(0.9)">
                                    <g transform="scale(3)">
                                        <path
                                            fill="#fff"
                                            fillOpacity="1"
                                            d="M-28.666 41.452 L2.247 0 L-28.666 -41.452 H13.138 L44.051 0 L13.138 41.452 Z"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </motion.div>
        </footer>
    )
}

export default Footer