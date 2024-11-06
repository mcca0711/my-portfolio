function createStars() {
    const container = document.querySelector('.background-decorations');
    for (let i = 0; i < 250; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 4}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(star);
    }
}

function createSpaceships() {
    const container = document.querySelector('.background-decorations');
    const spaceshipSVGs = [
        // Spaceship 1 - Advanced Fighter Design
        `<svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Main body layers -->
            <path d="M30,30 L55,20 L95,20 L105,30 L95,40 L55,40 L30,30" fill="#004400"/>
            <path d="M35,30 L57,22 L93,22 L100,30 L93,38 L57,38 L35,30" fill="#00ff00"/>
            <!-- Cockpit with details -->
            <path d="M75,25 L90,30 L75,35 L65,35 L60,30 L65,25 L75,25" fill="#00ffff"/>
            <path d="M70,27 L85,30 L70,33 L67,30 L70,27" fill="#ffffff" opacity="0.6"/>
            <!-- Wing structures -->
            <path d="M50,20 L65,8 L80,20" fill="#00ff00"/>
            <path d="M50,40 L65,52 L80,40" fill="#00ff00"/>
            <path d="M55,18 L65,10 L75,18" fill="#004400"/>
            <path d="M55,42 L65,50 L75,42" fill="#004400"/>
            <!-- Side thrusters -->
            <circle cx="45" cy="22" r="2" fill="#004400"/>
            <circle cx="45" cy="38" r="2" fill="#004400"/>
            <!-- Main engine housing -->
            <path d="M25,30 L35,26 L35,34 L25,30" fill="#ff00ff"/>
            <path d="M28,30 L33,28 L33,32 L28,30" fill="#ff0000"/>
            <!-- Animated thrust (pointing left) -->
            <g transform="translate(25,30)">
                <circle cx="-3" cy="0" r="2" fill="#ff0000">
                    <animate attributeName="opacity" values="1;0.2;1" dur="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-5" cy="0" r="1.5" fill="#ffff00">
                    <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-7" cy="0" r="1" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0.4;1" dur="0.3s" repeatCount="indefinite"/>
                </circle>
            </g>
        </svg>`,
        
        // Spaceship 2 - Heavy Cruiser
        `<svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Layered main body -->
            <path d="M35,30 L60,15 L100,15 L110,30 L100,45 L60,45 L35,30" fill="#440044"/>
            <path d="M40,30 L62,18 L98,18 L105,30 L98,42 L62,42 L40,30" fill="#ff00ff"/>
            <!-- Advanced cockpit -->
            <path d="M85,25 L95,30 L85,35 L75,35 L70,30 L75,25 L85,25" fill="#00ffff"/>
            <path d="M80,27 L90,30 L80,33 L77,30 L80,27" fill="#ffffff" opacity="0.6"/>
            <!-- Detailed wings -->
            <path d="M65,15 L80,5 L95,15" fill="#ff00ff"/>
            <path d="M65,45 L80,55 L95,45" fill="#ff00ff"/>
            <path d="M70,13 L80,7 L90,13" fill="#440044"/>
            <path d="M70,47 L80,53 L90,47" fill="#440044"/>
            <!-- Armor plating -->
            <path d="M75,20 L85,20 L85,40 L75,40" fill="#440044" opacity="0.5"/>
            <!-- Dual engine system -->
            <path d="M30,25 L40,22 L40,28 L30,25" fill="#00ff00"/>
            <path d="M30,35 L40,32 L40,38 L30,35" fill="#00ff00"/>
            <path d="M33,25 L37,23.5 L37,26.5 L33,25" fill="#ff0000"/>
            <path d="M33,35 L37,33.5 L37,36.5 L33,35" fill="#ff0000"/>
            <!-- Dual thrust (pointing left) -->
            <g transform="translate(30,25)">
                <circle cx="-3" cy="0" r="2" fill="#ff0000">
                    <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-5" cy="0" r="1.5" fill="#ffff00">
                    <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-7" cy="0" r="1" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0.4;1" dur="0.4s" repeatCount="indefinite"/>
                </circle>
            </g>
            <g transform="translate(30,35)">
                <circle cx="-3" cy="0" r="2" fill="#ff0000">
                    <animate attributeName="opacity" values="1;0.2;1" dur="0.6s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-5" cy="0" r="1.5" fill="#ffff00">
                    <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-7" cy="0" r="1" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0.4;1" dur="0.4s" repeatCount="indefinite"/>
                </circle>
            </g>
        </svg>`,
        
        // Spaceship 3 - Command Vessel
        `<svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Complex main body -->
            <path d="M40,30 L65,10 L105,10 L115,30 L105,50 L65,50 L40,30" fill="#004444"/>
            <path d="M45,30 L67,13 L102,13 L110,30 L102,47 L67,47 L45,30" fill="#00ffff"/>
            <!-- Command bridge -->
            <path d="M90,25 L100,30 L90,35 L80,35 L75,30 L80,25 L90,25" fill="#ff00ff"/>
            <path d="M85,27 L95,30 L85,33 L82,30 L85,27" fill="#ffffff" opacity="0.6"/>
            <!-- Enhanced wings -->
            <path d="M70,10 L85,0 L100,10" fill="#00ffff"/>
            <path d="M70,50 L85,60 L100,50" fill="#00ffff"/>
            <path d="M75,8 L85,2 L95,8" fill="#004444"/>
            <path d="M75,52 L85,58 L95,52" fill="#004444"/>
            <!-- Shield generators -->
            <circle cx="80" cy="20" r="3" fill="#004444"/>
            <circle cx="80" cy="40" r="3" fill="#004444"/>
            <!-- Triple engine configuration -->
            <path d="M35,30 L45,27 L45,33 L35,30" fill="#00ff00"/>
            <path d="M35,22 L45,19 L45,25 L35,22" fill="#00ff00"/>
            <path d="M35,38 L45,35 L45,41 L35,38" fill="#00ff00"/>
            <path d="M38,30 L42,28.5 L42,31.5 L38,30" fill="#ff0000"/>
            <path d="M38,22 L42,20.5 L42,23.5 L38,22" fill="#ff0000"/>
            <path d="M38,38 L42,36.5 L42,39.5 L38,38" fill="#ff0000"/>
            <!-- Triple thrust (pointing left) -->
            <g transform="translate(35,30)">
                <circle cx="-3" cy="0" r="2" fill="#ff0000">
                    <animate attributeName="opacity" values="1;0.2;1" dur="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-5" cy="0" r="1.5" fill="#ffff00">
                    <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-7" cy="0" r="1" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0.4;1" dur="0.3s" repeatCount="indefinite"/>
                </circle>
            </g>
            <g transform="translate(35,22)">
                <circle cx="-3" cy="0" r="2" fill="#ff0000">
                    <animate attributeName="opacity" values="1;0.2;1" dur="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-5" cy="0" r="1.5" fill="#ffff00">
                    <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-7" cy="0" r="1" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0.4;1" dur="0.3s" repeatCount="indefinite"/>
                </circle>
            </g>
            <g transform="translate(35,38)">
                <circle cx="-3" cy="0" r="2" fill="#ff0000">
                    <animate attributeName="opacity" values="1;0.2;1" dur="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-5" cy="0" r="1.5" fill="#ffff00">
                    <animate attributeName="opacity" values="1;0.3;1" dur="0.4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="-7" cy="0" r="1" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0.4;1" dur="0.3s" repeatCount="indefinite"/>
                </circle>
            </g>
        </svg>`
    ];

    // Create spaceships with corrected movement direction
    for (let i = 0; i < 3; i++) {
        const spaceship = document.createElement('div');
        spaceship.className = 'spaceship';
        spaceship.innerHTML = spaceshipSVGs[i];
        spaceship.style.animation = `moveSpaceship${i + 1} ${35 + i * 8}s infinite linear`;
        container.appendChild(spaceship);
    }
}

window.addEventListener('load', () => {
    createStars();
    createSpaceships();
}); 