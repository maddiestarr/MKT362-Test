/* =====================================================
   MADELINE STARR
   SHARED WEBSITE NAVIGATION

   Use on every page with:

   <div id="site-navigation"></div>

   and:

   <script src="nav.js"></script>
===================================================== */


document.addEventListener("DOMContentLoaded", function () {


    const navigation =
        document.getElementById("site-navigation");


    if (!navigation) {

        console.error(
            "Could not find #site-navigation"
        );

        return;
    }


    navigation.innerHTML = `

        <nav class="site-nav">

            <div class="nav-container">


                <!-- =================================
                     LOGO / NAME
                ================================== -->

                <a
                    href="index.html"
                    class="nav-logo"
                >
                    Madeline Starr
                </a>



                <!-- =================================
                     NAVIGATION LINKS

                     Left → right across the top
                ================================== -->

                <ul class="nav-links">


                    <li>

                        <a href="index.html#product">
                            Product
                        </a>

                    </li>


                    <li>

                        <a href="index.html#picture">
                            My Picture
                        </a>

                    </li>


                    <li>

                        <a href="index.html#education">
                            My Education
                        </a>

                    </li>


                    <li>

                        <a href="index.html#school-life">
                            My School Life
                        </a>

                    </li>


                    <li>

                        <a href="index.html#personal">
                            Personal
                        </a>

                    </li>


                    <li>

                        <a href="index.html#future">
                            Future Goals
                        </a>

                    </li>


                </ul>

            </div>

        </nav>

    `;

});
