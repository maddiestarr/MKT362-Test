// nav.js
// Reusable navigation bar for Madeline Starr's website

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.createElement("nav");
    nav.className = "main-nav";

    nav.innerHTML = `
        <div class="nav-container">

            <!-- Profile Picture -->
            <a href="index.html" class="nav-profile">
                <img src="images/madeline.jpg" alt="Madeline Starr">
            </a>

            <!-- School Title -->
            <a href="index.html" class="nav-item home-link">
                <span class="nav-icon">🎓</span>
                <span>
                    <strong>Madeline Starr</strong>
                    <small>Iowa State University</small>
                </span>
            </a>

            <!-- Life at School -->
            <a href="school-life.html" class="nav-item">
                <span class="nav-icon">💛</span>
                <span>Life at School</span>
            </a>

            <!-- Work Experience -->
            <a href="work-experience.html" class="nav-item">
                <span class="nav-icon">💼</span>
                <span>Work Experience</span>
            </a>

        </div>
    `;

    // Add navigation to the top of the page
    document.body.prepend(nav);

    // Add styles to the page
    const style = document.createElement("style");

    style.textContent = `
        * {
            box-sizing: border-box;
        }

        .main-nav {
            width: 100%;
            position: sticky;
            top: 0;
            z-index: 1000;
            background: rgba(255, 250, 247, 0.96);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid #f1dcd5;
            box-shadow: 0 3px 15px rgba(100, 70, 60, 0.08);
        }

        .nav-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 10px 25px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        /* Profile photo */
        .nav-profile {
            flex-shrink: 0;
        }

        .nav-profile img {
            width: 52px;
            height: 52px;
            object-fit: cover;
            border-radius: 50%;
            border: 3px solid #e8b7a8;
            padding: 2px;
            background: white;
            transition: transform 0.3s ease;
        }

        .nav-profile img:hover {
            transform: rotate(-5deg) scale(1.08);
        }

        /* Navigation links */
        .nav-item {
            display: flex;
            align-items: center;
            gap: 9px;
            padding: 10px 16px;
            border-radius: 18px;
            color: #604c48;
            text-decoration: none;
            font-family: "Arial", sans-serif;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.25s ease;
            white-space: nowrap;
        }

        .nav-item:hover {
            background: #f9e5df;
            color: #9a6255;
            transform: translateY(-2px);
        }

        .nav-item.active {
            background: #f3d4cb;
            color: #8b5549;
        }

        .nav-icon {
            font-size: 18px;
        }

        /* Name/school section */
        .home-link {
            margin-right: auto;
        }

        .home-link strong {
            display: block;
            font-size: 15px;
            color: #72534c;
        }

        .home-link small {
            display: block;
            margin-top: 2px;
            font-size: 11px;
            font-weight: 400;
            color: #9d817a;
        }

        /* Mobile */
        @media (max-width: 700px) {
            .nav-container {
                padding: 8px 12px;
                gap: 5px;
            }

            .nav-profile img {
                width: 42px;
                height: 42px;
            }

            .nav-item {
                padding: 8px 9px;
                font-size: 12px;
            }

            .nav-icon {
                font-size: 15px;
            }

            .home-link span:last-child {
                display: none;
            }
        }
    `;

    document.head.appendChild(style);

    // Automatically highlight the current page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-item");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});
