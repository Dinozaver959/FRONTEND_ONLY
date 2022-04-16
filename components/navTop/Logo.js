import React from 'react';
import Link from 'next/link'
import { useTheme, useMediaQuery } from '@material-ui/core';
import {IoLogoWordpress} from "react-icons/io";
import { IconContext } from "react-icons";

const style = {
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] font-semibold text-2xl`
}

function LoginButton() {
    
    const theme = useTheme();
    const is_md_up = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Link href="/" passHref>        
                <div className={style.logoContainer}>
                    {/*<Image src={logo} height={50} width={50} alt="" /> */}

                    { is_md_up ? ( //smaller
                        <div className={style.logoText}>EasyLaunchNFT</div> 
                    ) : (   // bigger
                        <IconContext.Provider
                        value={{  size: '24px' }}
                        >
                            <IoLogoWordpress />
                        </IconContext.Provider>
                    )}
                </div>        
            </Link >
        </> 
    )
}

export default LoginButton
