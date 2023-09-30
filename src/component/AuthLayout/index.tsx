'use client'
import React, { useEffect, useRef } from 'react'
import style from './style.module.css';
import Adv1 from '@/assets/images/adv1.jpg';
import Adv2 from '@/assets/images/adv2.jpg';
import Adv3 from '@/assets/images/adv3.jpg';
import Image from 'next/image';

let count = 0

const AuthLayout = () => {
  const imgContainerRef = useRef(null);

  useEffect(() => {
    const callback = () => {
      const imgContainer: any = imgContainerRef?.current;

      if (imgContainer) {
        const children = imgContainer?.childNodes;
  
        children.forEach((element: any) => {
          if (element) {
            element.style.opacity = 0;
          }
        });
  
        children[count].style.opacity = 1;

        console.log({
          length: children?.length,
          count
        });
        

        if (children?.length - 1 === count) {
          count = 0
        } else {
          count++;
        }
        
      }
    }

    callback();

    const interval = setInterval(callback, 4000)
    
    return () => clearInterval(interval);
  }, [])

  return (
    <section className={style.authLayoutContainer}>
      <div ref={imgContainerRef} className={style.imageContainer}>
        <Image src={Adv1} alt='auth-image'  />
        <Image src={Adv2} alt='auth-image'  />
        <Image src={Adv3} alt='auth-image'  />
      </div>
    </section>
  )
}

export default AuthLayout