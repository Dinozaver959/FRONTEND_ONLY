import React from 'react'
import Link from "next/link";
import styles from "../styles/CreateHeader.module.css";
import { useTheme, useMediaQuery } from '@material-ui/core';
import { createTheme } from '@mui/material/styles';

function CreateHeader() {

    /*
    const theme = useTheme();
    */

    const theme = createTheme({
        breakpoints: {
          values: {
            xs: 0,
            xxs: 450,
            sm: 600,
            smd: 740,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      });


    const is_smd_up = useMediaQuery(theme.breakpoints.up('smd'));


    return (
        <> 
        
            {is_smd_up ? (    
                <> 
                    <div className={styles.wrapper}>
                        <nav className={styles.headerItems}> 

                            <Link href="/create/dashboard" passHref> 
                                <div className={styles.headerItem}>
                                    Dashboard
                                </div>
                            </Link>

                            <Link href="/create/startCollection" passHref> 
                                <div className={styles.headerItem}>
                                    Create
                                </div>
                            </Link>

                            <Link href="/create/description" passHref> 
                                <div className={styles.headerItem}>
                                    Description
                                </div>
                            </Link>

                            <Link href="/create/prerevealImage" passHref> 
                                <div className={styles.headerItem}>
                                    Prereveal Image
                                </div>
                            </Link>

                            <Link href="/create/uploadImages" passHref> 
                                <div className={styles.headerItem}>
                                    Images  {/** Upload Images */}
                                </div>
                            </Link>

                            {/* <Link href="/api/api-getCollectionNames">  */}
                            <Link href="/create/uploadmetadata" passHref> 
                                <div className={styles.headerItem}>
                                    MetaData  {/** Upload MetaData */}
                                </div>
                            </Link>

                            <Link href="/create/configureSmartContract" passHref> 
                                <div className={styles.headerItem}>
                                    Configure  {/** Configure smart contract */}
                                </div>
                            </Link>

                            <Link href="/create/deploy" passHref> 
                                <div className={styles.headerItem}>
                                    Deploy
                                </div>
                            </Link>

                            <Link href="/create/interact" passHref> 
                                <div className={styles.headerItem}>
                                    Interact
                                </div>
                            </Link>
                        </nav>         
                    </div>
                </>
            ) : ( 
                <> 
                    <div className={styles.wrapper}>
                        <nav className={styles.headerItems}> 

                            <Link href="/create/dashboard" passHref> 
                                <div className={styles.headerItem}>
                                    Dashboard
                                </div>
                            </Link>

                            <Link href="/create/startCollection" passHref> 
                                <div className={styles.headerItem}>
                                    Create
                                </div>
                            </Link>

                            <Link href="/create/description" passHref> 
                                <div className={styles.headerItem}>
                                    Description
                                </div>
                            </Link>

                            <Link href="/create/prerevealImage" passHref> 
                                <div className={styles.headerItem}>
                                    Prereveal Image
                                </div>
                            </Link>
                            </nav>         
                    </div>



                    <div className={styles.wrapper}>
                        <nav className={styles.headerItems}> 
                            <Link href="/create/uploadImages" passHref> 
                                <div className={styles.headerItem}>
                                    Images  {/** Upload Images */}
                                </div>
                            </Link>

                            {/* <Link href="/api/api-getCollectionNames">  */}
                            <Link href="/create/uploadmetadata" passHref> 
                                <div className={styles.headerItem}>
                                    MetaData  {/** Upload MetaData */}
                                </div>
                            </Link>

                            <Link href="/create/configureSmartContract" passHref> 
                                <div className={styles.headerItem}>
                                    Configure  {/** Configure smart contract */}
                                </div>
                            </Link>

                            <Link href="/create/deploy" passHref> 
                                <div className={styles.headerItem}>
                                    Deploy
                                </div>
                            </Link>

                            <Link href="/create/interact" passHref> 
                                <div className={styles.headerItem}>
                                    Interact
                                </div>
                            </Link>
                        </nav>         
                    </div>
                </>
            )}
        </>
    )
}

export default CreateHeader