/* =====================================================
   MADELINE STARR WEBSITE
   SHARED NAVIGATION SYSTEM

   This file creates:

   1. Logo
   2. Informational header
   3. Primary navigation
   4. Secondary navigation
   5. Left sidebar navigation

   Use this SAME file on every page.
===================================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       TOP NAVIGATION
    ================================================= */

    const navigationContainer =
        document.getElementById("site-navigation");


    if (navigationContainer) {

        navigationContainer.innerHTML = `

            <header class="site-header">


                <!-- LOGO -->

                <div class="logo-area">

                    <a href="index.html">

                        <span class="logo-heart">♡</span>

                        <span class="logo-name">
                            Madeline
                        </span>

                        <small>
                            Starr
                        </small>

                    </a>

                </div>



                <!-- RIGHT HEADER -->

                <div class="header-right">


                    <!-- INFORMATIONAL AREA -->

                    <div class="info-area">

                        <div>

                            <p class="info-label">
                                ♡ Welcome to my website
                            </p>

                            <h2>
                                Marketing • Sales • Real Estate
                            </h2>

                            <p>
                                Learn a little about me, my life at
                                Iowa State University, and my future
                                career goals.
                            </p>

                        </div>

                    </div>



                    <!-- PRIMARY NAVIGATION -->

                    <nav
                        class="primary-nav"
                        aria-label="Primary navigation"
                    >

                        <a href="index.html#about">
                            About Me
                        </a>

                        <a href="index.html#picture">
                            My Picture
                        </a>

                        <a href="index.html#school">
                            My Title in School
                        </a>

                        <a href="index.html#life">
                            My Life in School
                        </a>

                    </nav>



                    <!-- SECONDARY NAVIGATION -->

                    <nav
                        class="secondary-nav"
                        aria-label="Secondary navigation"
                    >

                        <a href="index.html#about">
                            About
                        </a>

                        <a href="index.html#picture">
                            Photo
                        </a>

                        <a href="index.html#school">
                            Education
                        </a>

                        <a href="index.html#life">
                            Organizations
                        </a>

                        <a href="index.html#life">
                            Future Goals
                        </a>

                    </nav>


                </div>

            </header>

        `;

    }



    /* =================================================
       LEFT SIDEBAR NAVIGATION

       This is here because the original wireframe
       has navigation in the left column too.
    ================================================= */

    const sideNavigation =
        document.getElementById("side-navigation");


    if (sideNavigation) {

        sideNavigation.innerHTML = `

            <nav
                class="side-nav"
                aria-label="Side navigation"
            >

                <a href="index.html#about">

                    <span>♡</span>

                    <div>
                        <strong>
                            About Me
                        </strong>

                        <small>
                            Get to know me
                        </small>
                    </div>

                </a>


                <a href="index.html#picture">

                    <span>♡</span>

                    <div>
                        <strong>
                            My Picture
                        </strong>

                        <small>
                            Meet Madeline
                        </small>
                    </div>

                </a>


                <a href="index.html#school">

                    <span>♡</span>

                    <div>
                        <strong>
                            My Title in School
                        </strong>

                        <small>
                            Iowa State
                        </small>
                    </div>

                </a>


                <a href="index.html#life">

                    <span>♡</span>

                    <div>
                        <strong>
                            My School Life
                        </strong>

                        <small>
                            Clubs & activities
                        </small>
                    </div>

                </a>


            </nav>

        `;

    }

});
