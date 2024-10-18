document.addEventListener('DOMContentLoaded', () => {
    const chatbotButton = document.getElementById('chatbot-button');

    chatbotButton.addEventListener('click', () => {
        window.location.href = 'https://share.imagica.ai?q=9ca8ece3-d395-4bda-8663-00a883497587';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('#nav-links');

    // Toggle the menu visibility when the menu icon is clicked
    menuIcon.addEventListener('click', (e) => {
        menuIcon.classList.toggle('active'); // Toggle active class
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex'; // Toggle navbar links
        e.stopPropagation(); // Prevent the click from closing the menu immediately
    });

    // Close the menu when clicking outside of it (Only for mobile)
    document.addEventListener('click', (event) => {
        // Check if the clicked element is not the menu icon or inside the nav links
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            // Only close the menu on mobile
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none'; // Hide links when clicking outside
                menuIcon.classList.remove('active');
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const phrases = ["Learn about Yoga", "Learn about Naturopathy", "Learn about Ayurveda"];
    const typewriterElement = document.getElementById("typewriter-heading");
    let currentPhraseIndex = 0;
    let isDeleting = false;
    let charIndex = 0;

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        typewriterElement.textContent = currentPhrase.substring(0, charIndex);

        if (!isDeleting) {
            // Typing phase
            if (charIndex < currentPhrase.length) {
                charIndex++;
                setTimeout(type, 150); // Adjust typing speed
            } else {
                // Pause after typing the phrase
                setTimeout(() => {
                    isDeleting = true;
                    setTimeout(type, 500); // Start deleting after pause
                }, 2000);
            }
        } else {
            // Deleting phase
            if (charIndex > 0) {
                charIndex--;
                setTimeout(type, 100); // Adjust deleting speed
            } else {
                // Move to the next phrase
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            }
        }
    }

    // Start the typing effect
    type();
});
document.addEventListener('DOMContentLoaded', () => {
    const exploreButtons = document.querySelectorAll('.explore-btn');
    const hiddenSection = document.getElementById('hidden-section');
    const hiddenContentContainer = document.getElementById('hidden-content-container');

    // Content data
    const contentData = {
        'ayurveda-content': `
        <h1>Understanding Ayurveda: The Science of Life</h1>
  <p>
        Ayurveda, an ancient holistic healing system that originated in India over 5,000 years ago, is often referred to as the "science of life" (from the Sanskrit words "Ayur" meaning life and "Veda" meaning knowledge or science). It offers a comprehensive approach to health and wellness, emphasizing the balance of the body, mind, and spirit.
    </p>

    <h2>Fundamental Principles of Ayurveda</h2>
    <p>
        At the core of Ayurveda is the belief that every individual is unique, with distinct physical, emotional, and spiritual characteristics. This uniqueness is defined by three primary life energies known as doshas: <strong>Vata</strong>, <strong>Pitta</strong>, and <strong>Kapha</strong>.
    </p>
    <ul>
        <li><strong>Vata (Air and Space):</strong> Vata governs movement in the body, including circulation, breathing, and the nervous system. Individuals with a predominance of Vata tend to be creative and energetic but may also experience anxiety and restlessness when out of balance.</li>
        <li><strong>Pitta (Fire and Water):</strong> Pitta is responsible for transformation and digestion, including metabolism and energy production. Those with a Pitta constitution are often ambitious and focused, but excess Pitta can lead to irritability and inflammation.</li>
        <li><strong>Kapha (Earth and Water):</strong> Kapha provides structure and stability, governing growth and nourishment. Kapha individuals are usually calm and grounded, but an imbalance may lead to lethargy and attachment.</li>
    </ul>

    <h2>Holistic Approach to Health</h2>
    <p>
        Ayurveda promotes personalized health and wellness by recognizing these doshic types and their influence on individual health. Treatment strategies are tailored to balance the doshas through various modalities, including:
    </p>
    <ul>
        <li><strong>Diet and Nutrition:</strong> Ayurvedic diets are based on the principles of balancing the doshas with appropriate foods, herbs, and spices. Seasonal and locally sourced foods are emphasized, and meals are tailored to each individual's needs.</li>
        <li><strong>Herbal Medicine:</strong> Ayurveda utilizes a vast array of herbs and natural remedies to support healing and promote health. These remedies are designed to restore balance, enhance digestion, and strengthen the immune system.</li>
        <li><strong>Lifestyle Practices:</strong> Daily routines (known as <em>Dinacharya</em>) and seasonal routines (known as <em>Ritucharya</em>) are recommended to align individuals with nature’s rhythms. This includes practices such as yoga, meditation, and adequate sleep.</li>
        <li><strong>Detoxification:</strong> Panchakarma, a detoxification process in Ayurveda, involves therapeutic treatments to cleanse the body of toxins (<em>ama</em>) and restore balance. This process helps rejuvenate the body and improve overall health.</li>
    </ul>

    <h2>Mind-Body Connection</h2>
    <p>
        Ayurveda recognizes the profound connection between the mind and body, advocating for practices that promote mental clarity and emotional well-being. Techniques such as meditation, mindfulness, and yoga are integral components of an Ayurvedic lifestyle, helping individuals cultivate awareness and achieve mental tranquility.
    </p>

    <h2>Preventive Healthcare</h2>
    <p>
        One of the most significant contributions of Ayurveda is its focus on prevention. By understanding individual constitutions and maintaining a balanced lifestyle, Ayurveda seeks to prevent illness before it arises. Regular check-ups, dietary adjustments, and lifestyle changes are encouraged to maintain optimal health and vitality.
    </p>

    <h2>Conclusion</h2>
    <p>
        In a world where modern medicine often focuses on symptoms rather than root causes, Ayurveda offers a refreshing perspective on health and wellness. By integrating ancient wisdom with contemporary practices, Ayurveda empowers individuals to take charge of their health through holistic and personalized approaches. Embracing Ayurveda can lead to a more balanced, harmonious, and fulfilling life.
    </p>
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202406/growing-scope-of-ayurveda-opportunities-and-career-paths-262341513-16x9_0.jpg?VersionId=2KfeAVffp50ssCKlecgeAwF5KpjigixK&size=690:388" alt="Detailed Ayurveda" style="width:100%; margin-bottom: 20px;">
            <p>Ayurveda tailors treatments to individual body types (doshas), including Vata, Pitta, and Kapha.<br></p><a href="https://en.wikipedia.org/wiki/Ayurveda" class="custom-link">Learn more about Ayurveda</a>

        `,
        'yoga-content': `
            <h1>Yoga & Meditation: Pathways to Inner Peace and Holistic Health</h1>
    <p>
        Yoga and meditation are ancient practices that have transcended time and culture, offering profound benefits for physical, mental, and spiritual well-being. Rooted in Eastern philosophies, these disciplines are increasingly embraced worldwide as effective tools for achieving balance, reducing stress, and enhancing overall quality of life.
    </p>

    <h2>Understanding Yoga</h2>
    <p>
        <strong>Yoga</strong> is derived from the Sanskrit word "Yuj," which means to unite or join. It embodies a holistic approach to health that integrates the body, mind, and spirit. Yoga encompasses various physical postures (asanas), breathing techniques (pranayama), and meditative practices that promote physical fitness, mental clarity, and emotional stability.
    </p>
    <ul>
        <li><strong>Physical Benefits:</strong>
            <ul>
                <li><strong>Flexibility and Strength:</strong> Regular practice of yoga improves flexibility and builds strength, enhancing physical performance in daily activities and sports.</li>
                <li><strong>Posture and Alignment:</strong> Yoga helps correct posture and body alignment, reducing the risk of injury and alleviating chronic pain.</li>
                <li><strong>Healthier Body Systems:</strong> Specific yoga poses stimulate the organs, improving digestion, circulation, and respiratory functions, contributing to overall health.</li>
            </ul>
        </li>
        <li><strong>Mental Benefits:</strong>
            <ul>
                <li><strong>Stress Reduction:</strong> Through mindful movement and breath awareness, yoga helps lower stress levels, promoting relaxation and calmness.</li>
                <li><strong>Enhanced Focus:</strong> The practice of yoga improves concentration and cognitive function, making it easier to stay present and attentive in daily tasks.</li>
                <li><strong>Emotional Regulation:</strong> Yoga encourages self-awareness and emotional regulation, helping practitioners navigate their feelings with greater ease.</li>
            </ul>
        </li>
        <li><strong>Spiritual Benefits:</strong>
            <ul>
                <li><strong>Connection to Self:</strong> Yoga fosters a deeper connection to oneself, facilitating self-discovery and personal growth.</li>
                <li><strong>Mindfulness and Presence:</strong> The meditative aspects of yoga cultivate mindfulness, enabling practitioners to live more fully in the present moment.</li>
            </ul>
        </li>
    </ul>

    <h2>Exploring Meditation</h2>
    <p>
        <strong>Meditation</strong> is a practice that involves focusing the mind and eliminating distractions to achieve a state of mental clarity and emotional stability. It is often used in conjunction with yoga but can also be practiced independently.
    </p>
    <ul>
        <li><strong>Types of Meditation:</strong>
            <ul>
                <li><strong>Mindfulness Meditation:</strong> This practice involves paying attention to thoughts, feelings, and bodily sensations without judgment, cultivating a state of awareness and acceptance.</li>
                <li><strong>Loving-Kindness Meditation (Metta):</strong> This practice focuses on developing feelings of compassion and love towards oneself and others, fostering emotional well-being and interpersonal connections.</li>
                <li><strong>Guided Meditation:</strong> In this form, practitioners listen to a teacher or audio guide, often incorporating visualization and relaxation techniques to enhance the experience.</li>
            </ul>
        </li>
        <li><strong>Benefits of Meditation:</strong>
            <ul>
                <li><strong>Mental Clarity:</strong> Regular meditation practice enhances clarity of thought, creativity, and problem-solving abilities.</li>
                <li><strong>Emotional Balance:</strong> Meditation reduces symptoms of anxiety and depression, promoting a more balanced emotional state and resilience against stress.</li>
                <li><strong>Improved Sleep:</strong> By calming the mind and body, meditation can improve sleep quality, helping practitioners achieve a more restful and restorative night.</li>
            </ul>
        </li>
    </ul>

    <h2>The Synergy of Yoga and Meditation</h2>
    <p>
        While yoga and meditation can be practiced independently, their combined practice creates a powerful synergy that amplifies their individual benefits. Yoga prepares the body and mind for meditation by promoting relaxation and physical comfort, making it easier to enter a meditative state.
    </p>
    <ul>
        <li><strong>Breath Control:</strong> Both practices emphasize the importance of breath. In yoga, breath control (pranayama) enhances physical performance and mental focus. In meditation, awareness of breath serves as an anchor for the mind, facilitating deeper relaxation and concentration.</li>
        <li><strong>Holistic Approach:</strong> Together, yoga and meditation address physical, mental, and emotional dimensions of health, fostering a balanced and harmonious lifestyle.</li>
    </ul>

    <h2>Incorporating Yoga and Meditation into Daily Life</h2>
    <ul>
        <li><strong>Start Small:</strong> Begin with short sessions of yoga or meditation, gradually increasing the duration as you become more comfortable.</li>
        <li><strong>Create a Dedicated Space:</strong> Designate a quiet and comfortable space for your practice, free from distractions.</li>
        <li><strong>Be Consistent:</strong> Aim to practice regularly, even if for just a few minutes each day, to establish a sustainable routine.</li>
        <li><strong>Explore Different Styles:</strong> Experiment with various yoga styles (Hatha, Vinyasa, Yin) and meditation techniques to find what resonates best with you.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>
        Yoga and meditation offer invaluable tools for enhancing physical health, mental clarity, and emotional balance. By incorporating these ancient practices into daily life, individuals can cultivate a deeper connection to themselves, fostering holistic well-being and a more fulfilling life. As you embark on this journey, remember that the path of yoga and meditation is a personal exploration, inviting you to discover your unique balance of mind, body, and spirit.
    </p>
            <img src="https://cdn.pixabay.com/photo/2023/02/05/18/39/meditation-7770253_1280.jpg" alt="Detailed Yoga" style="width:100%; margin-bottom: 20px;">
            <p>These practices help reduce stress, increase flexibility, and enhance inner peace.</p><a href="https://en.wikipedia.org/wiki/Yoga" class="custom-link">Learn more about Yoga</a><br><a href="https://en.wikipedia.org/wiki/Meditation" class="custom-link">Learn more about Meditation</a>
        `,
        'naturopathy-content': `
        <h1>Naturopathy: Embracing Nature's Healing Power</h1>
            <p>
        Naturopathy is a holistic approach to healthcare that emphasizes the body’s natural ability to heal itself. Rooted in traditional healing practices and modern scientific principles, naturopathy focuses on treating the whole person—body, mind, and spirit—rather than merely addressing symptoms. By using natural therapies and lifestyle interventions, naturopathy aims to restore balance and promote long-term wellness.
    </p>

    <h2>Core Principles of Naturopathy</h2>
    <ul>
        <li><strong>The Healing Power of Nature (Vis Medicatrix Naturae):</strong> Naturopathy believes in the body’s inherent ability to heal and maintain itself when given the right conditions. This principle encourages treatments that support and enhance the body’s natural healing processes.</li>
        <li><strong>Treat the Whole Person (Tolle Totum):</strong> Rather than focusing solely on symptoms, naturopathy assesses the individual’s physical, emotional, mental, and spiritual well-being. It aims to understand the underlying causes of illness and provide comprehensive care that addresses these interconnected aspects.</li>
        <li><strong>Identify and Treat the Root Cause (Tolle Causam):</strong> Naturopathy seeks to identify the root causes of health issues instead of merely treating symptoms. This approach may involve addressing lifestyle factors, dietary imbalances, environmental influences, or emotional stressors.</li>
        <li><strong>First, Do No Harm (Primum Non Nocere):</strong> Practitioners choose treatments that minimize the risk of side effects and work in harmony with the body’s natural functions. Natural remedies, nutrition, and non-invasive therapies are preferred whenever possible.</li>
        <li><strong>Prevention is Better than Cure (Praevenire):</strong> Preventive healthcare is a cornerstone of naturopathy. The focus is on educating individuals about healthy lifestyles and preventive measures to reduce the risk of disease and promote optimal health.</li>
        <li><strong>Doctor as Teacher (Docere):</strong> Naturopathic practitioners play an educational role, empowering individuals to take responsibility for their own health. They provide guidance and resources, promoting awareness and proactive care.</li>
    </ul>

    <h2>Naturopathic Therapies and Modalities</h2>
    <ul>
        <li><strong>Nutrition and Diet Therapy:</strong> Proper nutrition is central to naturopathy. Diet therapy involves personalized dietary plans that emphasize whole, organic, and nutrient-dense foods. Naturopathic practitioners often recommend specific diets to address health conditions such as digestive issues, inflammation, or hormonal imbalances.</li>
        <li><strong>Herbal Medicine:</strong> Naturopathy utilizes the medicinal properties of herbs to treat various ailments and support overall health. Herbal remedies are chosen based on their specific properties, such as anti-inflammatory, adaptogenic, or immune-boosting effects, and are often used to enhance other naturopathic treatments.</li>
        <li><strong>Hydrotherapy:</strong> Water therapy, or hydrotherapy, uses the therapeutic properties of water to promote healing and detoxification. Treatments may include hot and cold compresses, saunas, baths, and steam inhalation to stimulate circulation, enhance detoxification, and relieve pain.</li>
        <li><strong>Physical Therapies:</strong> Naturopathy includes various physical treatments like massage, chiropractic care, and physiotherapy to improve musculoskeletal health and support the body’s natural alignment. These therapies help relieve tension, improve mobility, and enhance overall physical wellness.</li>
        <li><strong>Lifestyle Counseling and Stress Management:</strong> Naturopathy emphasizes the importance of emotional and mental well-being. Practitioners often work with patients on stress management techniques such as meditation, yoga, mindfulness, and breathing exercises to promote relaxation and mental clarity.</li>
        <li><strong>Detoxification Programs:</strong> Detoxification is an integral part of naturopathy. Customized detox programs focus on eliminating toxins from the body through dietary adjustments, fasting, herbal support, and lifestyle changes, enhancing the body’s natural cleansing processes.</li>
        <li><strong>Homeopathy and Traditional Remedies:</strong> Naturopathy often incorporates homeopathy and traditional healing systems like Ayurveda and Chinese medicine. These practices use natural remedies to balance energy and support the body’s healing process.</li>
    </ul>

    <h2>Benefits of Naturopathy</h2>
    <ul>
        <li><strong>Personalized Care:</strong> Naturopathy provides individualized treatment plans that cater to each person’s unique constitution, health history, and lifestyle.</li>
        <li><strong>Minimal Side Effects:</strong> By prioritizing non-invasive and natural remedies, naturopathy reduces the risk of adverse effects commonly associated with pharmaceutical treatments.</li>
        <li><strong>Preventive Focus:</strong> Naturopathy emphasizes preventive healthcare, helping individuals build healthy habits and reduce their risk of chronic diseases such as diabetes, heart disease, and autoimmune conditions.</li>
        <li><strong>Enhanced Well-being:</strong> Naturopathic treatments aim to improve overall quality of life, including physical vitality, mental clarity, emotional balance, and spiritual fulfillment.</li>
    </ul>

    <h2>How to Incorporate Naturopathy into Your Life</h2>
    <ol>
        <li><strong>Eat Whole, Natural Foods:</strong> Embrace a diet rich in organic fruits, vegetables, whole grains, and lean proteins. Avoid processed foods and prioritize fresh, seasonal produce.</li>
        <li><strong>Practice Regular Physical Activity:</strong> Engage in exercises that suit your body type and lifestyle, such as yoga, walking, or strength training, to enhance physical fitness and reduce stress.</li>
        <li><strong>Manage Stress Effectively:</strong> Incorporate stress-reducing practices like meditation, deep breathing, and spending time in nature to maintain emotional and mental balance.</li>
        <li><strong>Detoxify Regularly:</strong> Consider periodic detoxification programs under the guidance of a naturopath to cleanse your body of accumulated toxins and rejuvenate your system.</li>
        <li><strong>Embrace Preventive Healthcare:</strong> Schedule regular check-ups and adopt proactive health practices to prevent illness and maintain long-term well-being.</li>
    </ol>

    <h2>Conclusion</h2>
    <p>
        Naturopathy offers a comprehensive and empowering approach to health and healing by leveraging the power of nature and the body's intrinsic ability to heal. By focusing on prevention, treating the root causes of disease, and promoting a balanced lifestyle, naturopathy provides a sustainable path to wellness and vitality. Whether used as a primary approach or integrated with other healthcare systems, naturopathy opens doors to a healthier, more harmonious way of living.
    </p>
            <img src="https://media.istockphoto.com/id/1315042436/photo/woman-prepares-aromatherapy-session-at-the-table-with-essential-oil-diffuser-medical-herbs.jpg?s=612x612&w=0&k=20&c=dlNEkqxiqITAN3AHctiaWnlSSgNk2-bGKWbmoIOx6Yo=" alt="Detailed Naturopathy" style="width:100%; margin-bottom: 20px;">
            <p>It includes treatments like herbal medicine, nutrition, and lifestyle changes.</p> <br> <a href="https://en.wikipedia.org/wiki/Naturopathy" class="custom-link">Learn more about Naturopathy</a>
        `
    };

    exploreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contentKey = button.getAttribute('data-content');
            const contentToShow = contentData[contentKey];

            hiddenContentContainer.innerHTML = contentToShow;
            hiddenSection.style.display = 'block'; // Show the hidden section
            hiddenSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the unfolded section
        });
    });
});

// Scroll-triggered animation for sections
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            element.classList.add('active');
        }
    });
});
// Scroll-triggered animation for user reviews
document.addEventListener('scroll', () => {
    const reviews = document.querySelectorAll('.review');
    const screenPosition = window.innerHeight / 1.3;

    reviews.forEach(review => {
        const position = review.getBoundingClientRect().top;

        if (position < screenPosition) {
            review.classList.add('visible');
        }
    });
});

// Select the elements
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const header = document.querySelector('header');

// Initially hide the menu when loading on mobile screens
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        navLinks.style.transform = 'translateX(100%)'; // Hide menu by default
    }
});

// Toggle the active class for showing/hiding the mobile nav
menuIcon.addEventListener('click', () => {
    if (navLinks.style.transform === 'translateX(0%)') {
        navLinks.style.transform = 'translateX(100%)'; // Close the menu
    } else {
        navLinks.style.transform = 'translateX(0%)'; // Open the menu
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('#nav-links');
    const navItems = document.querySelectorAll('#nav-links a');

    // Function to open the mobile menu
    const openMenu = () => {
        navLinks.style.transform = 'translateX(0)';  // Slide in
        navLinks.classList.add('active'); // Add active class
    };

    // Function to close the mobile menu
    const closeMenu = () => {
        navLinks.style.transform = 'translateX(-100%)';  // Slide out
        navLinks.classList.remove('active');  // Remove active class
    };

    // Toggle the mobile menu only if the window is small enough (<= 768px)
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();  // Prevent other click events from firing

        if (window.innerWidth <= 768) {
            if (navLinks.classList.contains('active')) {
                closeMenu();  // Close the menu if it's open
            } else {
                openMenu();  // Open the menu if it's closed
            }
        }
    });

    // Close the menu when a nav item is clicked (only on mobile)
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                closeMenu();  // Close the menu on mobile
            }

            // Navigate to the link's href (this avoids any strange behavior)
            const href = item.getAttribute('href');
            if (href) {
                setTimeout(() => {
                    window.location.href = href;  // Delay navigation to allow the menu to close
                }, 300);  // Match delay with CSS transition time
            }
        });
    });

    // Close the menu if you click outside of it (for mobile only)
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
            if (navLinks.classList.contains('active') && !navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
                closeMenu();  // Close the menu if clicked outside
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav'); // Target the nav element directly
    const triggerHeight = 50; // Change this value if needed

    window.addEventListener('scroll', () => {
        if (window.scrollY > triggerHeight) {
            nav.classList.add('scrolled'); // Add 'scrolled' class when scrolled beyond triggerHeight
        } else {
            nav.classList.remove('scrolled'); // Remove 'scrolled' class when at the top
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
  
    loginToggle.addEventListener('click', () => {
      loginToggle.classList.add('active');
      signupToggle.classList.remove('active');
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
    });
  
    signupToggle.addEventListener('click', () => {
      signupToggle.classList.add('active');
      loginToggle.classList.remove('active');
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
    });
  });
  
  
  

