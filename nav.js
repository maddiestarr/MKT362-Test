/* =========================================
   SHARED WEBSITE NAVIGATION
   =========================================

   This navigation can be used on EVERY page.

   Add this before the closing </body> tag:

   <script src="nav.js"></script>

   Then add:

   <div id="site-navigation"></div>

   The JavaScript will automatically create
   the navigation inside that div.
========================================= */


document.addEventListener("DOMContentLoaded", function () {

    const navigationContainer =
        document.getElementById("site-navigation");


    // Make sure the navigation container exists
    if (!navigationContainer) {
        console.error(
            "Navigation error: #site-navigation was not found."
        );

        return;
    }


    // Navigation HTML
    navigationContainer.innerHTML = `

        <nav class="site-nav" aria-label="Main navigation">

            <div class="nav-inner">

                <!-- Website Logo -->
                <a href="index.html" class="nav-logo">
                    ♡ My World
                </a>


                <!-- Navigation Links -->
                <ul class="nav-links">

                    <li>
                        <a href="index.html#about">
                            About Me
                        </a>
                    </li>

                    <li>
                        <a href="index.html#picture">
                            My Picture
                        </a>
                    </li>

                    <li>
                        <a href="index.html#school">
                            My Title in School
                        </a>
                    </li>

                    <li>
                        <a href="index.html#life">
                            My School Life
                        </a>
                    </li>

                </ul>

            </div>

        </nav>

    `;
});
