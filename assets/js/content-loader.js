// This file is responsible for loading chapter content dynamically when navigation buttons are clicked.

document.addEventListener('DOMContentLoaded', () => {
    const chapterHeader = document.getElementById('chapter-header');
    const chapterSubtitle = document.getElementById('chapter-subtitle');
    const heroImage = document.getElementById('hero-image');
    const chapterContent = document.getElementById('chapter-content');
    const prevButton = document.getElementById('prev-chapter');
    const nextButton = document.getElementById('next-chapter');
    const heroPrevButton = document.getElementById('hero-prev');
    const heroNextButton = document.getElementById('hero-next');
    const chapterCounter = document.getElementById('chapter-counter');

    // Epic Smiles content for each chapter - Combined format
    const chapters = {
        1: {
            header: "Chapter 1: Welcome to Epic Smiles",
            subtitle: "Where your dental experience becomes a genuine partnership",
            hero: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&h=800&fit=crop",
            shortTitle: "Welcome to Epic Smiles",
            content: `
                <div class="chapter-introduction">
                    <p>At Epic Smiles of Conroe, we believe your dental experience should be something more: a genuine partnership built on understanding, trust, and a shared vision for your well-being.</p>
                </div>

                <div class="chapter-main-content">
                    <h2>Your Journey to Exceptional Care</h2>
                    <p>If you're seeking care that listens to your story and values your comfort as much as clinical excellence, you've come to the right place.</p>

                    <h2>Our Patient-Centered Approach</h2>
                    <p>Our approach is simple: we see you, the whole person, not just a set of teeth. Inspired by Dr. Fred Lima's commitment to patient-centered principles, we focus on what truly matters – your health, your confidence, and your unique aspirations, no matter the scale.</p>

                    <h2>Choose Your Starting Point</h2>
                    <div class="visit-options">
                        <div class="visit-option">
                            <h3>Single Problem Visit</h3>
                            <p>Perfect if you have a specific concern that needs attention</p>
                        </div>
                        <div class="visit-option">
                            <h3>Comprehensive Examination</h3>
                            <p>An in-depth exploration of your oral health with Dr. Lima</p>
                        </div>
                    </div>

                    <p>This website is your invitation to explore our world, structured like a friendly guide or a "pocket book." Each section is a chapter, designed to introduce you to our philosophy, our team, and the distinct experience we offer. We encourage you to explore at your own pace.</p>
                </div>

                <div class="chapter-conclusion">
                    <h2>Your Epic Smile Journey Begins Here</h2>
                    <p>We invite you to discover a dental setting where you feel heard, understood, and empowered. A place where your path to an epic smile is a collaborative and uplifting experience.</p>
                </div>
            `
        },
        2: {
            header: "Chapter 2: We Exist for a Reason",
            subtitle: "Building deep, personal connections for exceptional healthcare",
            hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1600&h=800&fit=crop",
            shortTitle: "We Exist for a Reason",
            content: `
                <div class="chapter-introduction">
                    <p>At Epic Smiles, we believe a deep, personal connection is the foundation of exceptional health care. Our approach extends beyond dentistry; it's a commitment inspired by Dr. Fred Lima's vision, focusing on your whole well-being.</p>
                </div>

                <div class="chapter-main-content">
                    <h2>Understanding Your Story</h2>
                    <p>"To start, let's talk about your story so far and what you're seeking in a dental setting that feels right for you. Because if we understand your story we will be able to better serve you and help with your aspirations, big or small."</p>

                    <h2>Co-Discovery Partnership</h2>
                    <p>This conversation guides our partnership. We practice co-discovery, where your voice shapes a plan that's right for you, ensuring it's perfectly suited to your specific needs. Together, we make decisions, always.</p>

                    <h2>Building Trust & Transformation</h2>
                    <p>This genuine connection builds trust, the starting point for profound transformations. When you feel truly seen and understood, you become an active partner in your well-being.</p>

                    <h2>Beyond Healthy Smiles</h2>
                    <p>These transformations mean more than healthy smiles; they bring renewed confidence, peace of mind, and the assurance of a meticulously cared-for foundation for your oral health.</p>
                </div>

                <div class="chapter-conclusion">
                    <h2>The Foundation of Excellence</h2>
                    <p>These beliefs are woven into every aspect of your Epic Smiles experience. The path to health is as vital as the outcome. We look forward to partnering with you.</p>
                </div>
            `
        },
        3: {
            header: "Chapter 3: Your Dental Experience",
            subtitle: "Partnering in your care with clarity, comfort, and collaboration",
            hero: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&h=800&fit=crop",
            shortTitle: "Your Dental Experience",
            content: `
                <div class="chapter-introduction">
                    <p>Your path to optimal oral health here is one of clarity, comfort, and collaboration, where your insights and aspirations are central to our co-discovery process. You are always in the driver's seat of your health decisions.</p>
                </div>

                <div class="chapter-main-content">
                    <h2>The First Hello: Choosing Your Path</h2>
                    <p>Your connection with Epic Smiles often starts with a call or email. Our team is here to listen, answer your questions, and help you choose the initial step that feels right.</p>

                    <div class="care-pathways">
                        <div class="pathway">
                            <h3>Single Problem Visit (30 minutes)</h3>
                            <ul>
                                <li>Warm welcome and focused attention on your stated issue</li>
                                <li>Clear explanations and answers to your questions</li>
                                <li>If other issues are noted, we'll make you aware without pressure</li>
                            </ul>
                        </div>

                        <div class="pathway">
                            <h3>Comprehensive Examination (2 hours)</h3>
                            <ul>
                                <li><strong>Unhurried Conversation:</strong> Dr. Lima discusses your story, concerns, and hopes</li>
                                <li><strong>Full Clinical Examination:</strong> Thorough, gentle assessment</li>
                                <li><strong>Radiographs & Photographs:</strong> Diagnostic images for assessment</li>
                                <li><strong>"Tour of Your Mouth":</strong> Collaborative exploration of appearance, bite, teeth condition, and gum health</li>
                                <li><strong>Optional Cleaning:</strong> If it aligns with your interests and findings</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Crafting Your Personalized Care Plan</h2>
                    <p>Following your comprehensive exam, we'll detail findings, explore all treatment options (pros, cons, timelines, costs), and develop a final plan together, guided by your priorities and comfort.</p>

                    <h2>Your Treatment Experience</h2>
                    <p>Should you proceed with treatment, expect our consistent high level of care. We prioritize your comfort, utilize modern technology for clinical excellence, and keep you informed every step of the way.</p>
                </div>

                <div class="chapter-conclusion">
                    <h2>Empowered, Informed, and Cared For</h2>
                    <p>At Epic Smiles, your dental experience is built on clinical excellence, deep respect, empowerment, and genuine human connection. We look forward to partnering with you.</p>
                </div>
            `
        },
        4: {
            header: "Chapter 4: Discovering Specialized Care",
            subtitle: "Solutions tailored for you with engineering precision",
            hero: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1600&h=800&fit=crop",
            shortTitle: "Discovering Specialized Care",
            content: `
                <div class="chapter-introduction">
                    <p>Think of complex dental needs as requiring the insight of a skilled engineer renovating a home. This is the essence of Prosthodontics, Dr. Fred Lima's area of deep expertise at Epic Smiles.</p>
                </div>

                <div class="chapter-main-content">
                    <h2>The Engineering Approach to Your Smile</h2>
                    <p>Many arrive frustrated, having addressed symptoms without finding the root cause, like a beautiful door in a crooked frame. As a Prosthodontist, Dr. Lima is that engineer for your smile, an expert in the intricate mechanics of your bite and how to restore optimal harmony.</p>

                    <h2>The Epic Smiles Approach</h2>
                    <p>Our specialized care begins with co-discovery. We listen to your story and goals, then conduct a thorough evaluation, much like an engineer surveying a site. Our guiding principle is "form follows function" – a beautiful, lasting smile must also function correctly and comfortably.</p>

                    <h2>Our Foundation Process</h2>
                    <ul>
                        <li>Establish a solid foundation for your bite</li>
                        <li>Develop a personalized blueprint for your care</li>
                        <li>Combine artistry with precision using state-of-the-art techniques</li>
                    </ul>

                    <h2>Solutions Tailored for You</h2>
                    <p>Whether you face significant tooth wear, missing teeth, bite discomfort, desire a comprehensive smile makeover, or have a seemingly minor concern that you want addressed with expert care, Dr. Lima's prosthodontic expertise offers a path to solutions.</p>

                    <p>We believe that even small details, when viewed through the lens of overall function and long-term health, benefit from a specialist's perspective.</p>
                </div>

                <div class="chapter-conclusion">
                    <h2>Specialized Care for Lasting Solutions</h2>
                    <p>Specialized care at Epic Smiles means a path to restored comfort, function, and confidence, built on meticulous planning and genuine partnership. It's the peace of mind knowing your dental health is guided by a specialist who sees the complete picture.</p>
                </div>
            `
        },
        5: {
            header: "Chapter 5: Real Transformations",
            subtitle: "Paths to an Epic Smile through genuine stories",
            hero: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1600&h=800&fit=crop",
            shortTitle: "Real Transformations",
            content: `
                <div class="chapter-introduction">
                    <p>At Epic Smiles of Conroe, every smile tells a story. These aren't just clinical cases – they're personal experiences of renewed confidence, comfort, and well-being.</p>
                </div>

                <div class="chapter-main-content">
                    <h2>Mary's Story: From Resistance to Renewal</h2>
                    <p>When Mary first walked into Epic Smiles, she firmly stated, "I'm here but I don't want to hear about implants. Don't even try to go there. I'm not doing it."</p>
                    <p>"Instead of pushing treatments, Dr. Lima just listened," Mary recalls. "For twenty minutes, I talked more about my dental history than I ever had before."</p>
                    <p>By the end of that first conversation, Mary requested an implant evaluation – a solution she had adamantly rejected just minutes earlier.</p>
                    <blockquote>"I'd avoid family gatherings because of my teeth. At Christmas, I'd sit quietly, not talking to anyone. Now I'm the one initiating conversations at family events."</blockquote>

                    <h2>John's Story: Rebuilding Function and Zest for Life</h2>
                    <p>Years of wear had left John's teeth visibly shortened, affecting both his appearance and comfort.</p>
                    <p>"I caught myself smiling less in photos and avoiding certain foods," John remembers. "It wasn't the major pain that finally brought me in – it was realizing I was missing out on simple joys."</p>
                    <blockquote>"I can enjoy my favorite foods again without thinking twice. But it's the confidence in everyday interactions that's made the biggest difference."</blockquote>

                    <h2>Sarah's Story: Finding Confidence Again</h2>
                    <p>For years, Sarah hid her smile behind closed lips. Dental anxiety from past experiences had led to avoidance.</p>
                    <p>"I was tired of feeling self-conscious, but the idea of extensive dental work terrified me," Sarah recalls.</p>
                    <blockquote>"At the wedding, I laughed freely for the first time in years. I wasn't thinking about my teeth – I was just being myself."</blockquote>

                    <h2>Robert's Story: Finding Relief and Understanding</h2>
                    <p>Robert had lived with jaw pain and headaches for years, accepting them as an unavoidable part of life.</p>
                    <p>"Instead of immediately suggesting treatments, he asked about my daily habits, stress levels, and sleep patterns," Robert explains. "He connected dots I never knew existed."</p>
                    <blockquote>"Within weeks, the headaches I'd had for years were significantly reduced. They didn't just treat symptoms – they helped me understand my condition."</blockquote>
                </div>

                <div class="chapter-conclusion">
                    <h2>Transformation Through Understanding and Care</h2>
                    <p>As you've seen through these stories, transformation comes in many forms. Every story reflects our commitment to understanding, partnership, and care tailored to individual needs.</p>
                </div>
            `
        },
        6: {
            header: "Chapter 6: Lifelong Health",
            subtitle: "Our hygiene partnership for lasting wellness",
            hero: "https://images.unsplash.com/photo-1609114952047-e14b0c343be2?w=1600&h=800&fit=crop",
            shortTitle: "Lifelong Health",
            content: `
                <div class="chapter-introduction">
                    <p>Your smile, especially after achieving a new level of health and beauty, deserves thoughtful, continuous attention. At Epic Smiles, our commitment to your well-being doesn't end when treatment is complete.</p>
                </div>

                <div class="chapter-main-content">
                    <h2>More Than Just a Cleaning</h2>
                    <p>We see hygiene appointments as proactive, personalized wellness visits – crucial for safeguarding your investment and preventing future problems. Our hygiene team serves as your dedicated partners in maintaining optimal oral health for the long haul.</p>

                    <h2>What Makes Our Hygiene Partnership Different?</h2>
                    <div class="hygiene-features">
                        <div class="feature">
                            <h3>Personalized Care</h3>
                            <p>Your hygiene care is tailored to your specific oral health status, restorations, lifestyle, and home care habits.</p>
                        </div>
                        <div class="feature">
                            <h3>Guardians of Your Foundation</h3>
                            <p>Our hygienists monitor the health of your gums and supporting bone – the very foundations of your smile.</p>
                        </div>
                        <div class="feature">
                            <h3>Protecting Your Investment</h3>
                            <p>For those with restorative or cosmetic dentistry, our team provides specialized techniques to maintain those beautiful results.</p>
                        </div>
                        <div class="feature">
                            <h3>Education and Empowerment</h3>
                            <p>We equip you with knowledge and skills to be an active participant in your oral wellness.</p>
                        </div>
                        <div class="feature">
                            <h3>Early Detection, Proactive Prevention</h3>
                            <p>Regular visits allow us to detect potential issues at their most manageable stages.</p>
                        </div>
                        <div class="feature">
                            <h3>Comfort First</h3>
                            <p>Our hygiene team is dedicated to providing gentle yet thorough care in a relaxing environment.</p>
                        </div>
                    </div>
                </div>

                <div class="chapter-conclusion">
                    <h2>Your Partner in Lifelong Wellness</h2>
                    <p>Investing in regular hygiene care at Epic Smiles is an investment in your future – preserving your ability to eat comfortably, speak confidently, and smile freely for a lifetime.</p>
                </div>
            `
        },
        7: {
            header: "Chapter 7: Meet the Team",
            subtitle: "The people behind your smile and exceptional care",
            hero: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1600&h=800&fit=crop",
            shortTitle: "Meet the Team",
            content: `
                <div class="chapter-introduction">
                    <p>At Epic Smiles of Conroe, we believe the heart of any exceptional experience lies in the people who create it. We're more than dental professionals; we're a family dedicated to your comfort, health, and epic smile.</p>
                </div>

                <div class="chapter-main-content">
                    <h2>Dr. Fred Lima – Prosthodontist & Visionary</h2>
                    <blockquote>"My greatest reward is seeing the renewed confidence and joy in a patient's smile. It's about more than teeth; it's about transforming lives, one relationship at a time."</blockquote>

                    <p>Dr. Fred Lima is a prosthodontist with over 25 years of experience restoring smiles through comprehensive, patient-centered care. He specializes in advanced dental solutions using state-of-the-art technology to deliver results that are not only beautiful, but lasting and functional.</p>

                    <h3>His Journey & Philosophy</h3>
                    <p>As a young dental student in Brazil, Dr. Lima discovered a Portuguese edition of "A Philosophy of the Practice of Dentistry" by Dr. L.D. Pankey. This book shaped his entire approach to dentistry, focusing on the four essentials: comfort, function, health, and esthetics.</p>

                    <p>In 2017, Dr. Lima came to the United States and completed the highly competitive 3-year Prosthodontics Residency Program at the University of Alabama at Birmingham, where he also completed advanced implant training.</p>

                    <h3>Specialized Expertise</h3>
                    <p>Only 2% of dentists in the U.S. are specialists in Prosthodontics—and Dr. Lima is proud to bring this expertise to Conroe, TX and the surrounding communities.</p>

                    <h3>Beyond Dentistry</h3>
                    <p>Outside of dentistry, Dr. Lima is a devoted husband to Marcela and proud father to Enzo and Gabriel. Together, they enjoy traveling, staying active, and spending time in nature with their energetic mini-Schnauzer, Frank.</p>

                    <h2>Our Caring Hygienists</h2>
                    <p>Our hygiene team stands at the forefront of your preventative care and ongoing oral wellness. They build lasting relationships while providing gentle, thorough care and education.</p>

                    <h2>Our Skilled Dental Assistants</h2>
                    <p>Working closely with Dr. Lima, our dental assistants ensure your treatments are smooth, comfortable, and efficient. Their reassuring presence creates an environment where you can feel at ease.</p>

                    <h2>Our Welcoming Front Office Team</h2>
                    <p>From your first call to coordinating your care, our front office team creates a seamless, stress-free experience with friendly voices and smiling faces.</p>
                </div>

                <div class="chapter-conclusion">
                    <h2>Meet Your Partners in Care</h2>
                    <p>We are incredibly proud of the team we've built at Epic Smiles. Each of us is committed to upholding the values of empathy, excellence, and genuine partnership that define our practice.</p>
                </div>
            `
        },
        8: {
            header: "Chapter 8: Connect With Us",
            subtitle: "Start your conversation and begin your journey",
            hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=800&fit=crop",
            shortTitle: "Connect With Us",
            content: `
                <div class="chapter-introduction">
                    <p>If what you've read resonates with you – if you're curious about how our approach could address your specific needs or aspirations – we warmly invite you to start your own conversation with us.</p>
                </div>

                <div class="chapter-main-content">
                    <h2>Your Next Step is Simple and Without Obligation</h2>
                    <p>We understand that reaching out can sometimes feel like a big step. When you connect with Epic Smiles of Conroe, you'll be met with warmth, respect, and a genuine desire to help. There's no pressure or judgment – just an open door to explore possibilities for your health and smile.</p>

                    <h2>How to Reach Us:</h2>
                    <div class="contact-options">
                        <div class="contact-method">
                            <h3>📞 By Phone</h3>
                            <p>Call us at <strong>(936) 441-4600</strong> for questions, information, or to schedule your visit.</p>
                        </div>
                        <div class="contact-method">
                            <h3>📧 By Email</h3>
                            <p>Reach us at <strong>info@myepicsmiles.com</strong> with questions or a note about what you're looking for.</p>
                        </div>
                        <div class="contact-method">
                            <h3>🌐 Online</h3>
                            <p>Visit our website to send a secure message or request an appointment online.</p>
                        </div>
                        <div class="contact-method">
                            <h3>📍 In Person</h3>
                            <p>We're located in Conroe, Texas. Visit us to learn more about our approach and meet our team.</p>
                        </div>
                    </div>

                    <h2>What to Expect When You Connect:</h2>
                    <p>Whether you're ready to schedule a visit or simply want to learn more, we're here for you. We can discuss your concerns, explain our approach, or guide you on beginning your dental experience with Epic Smiles.</p>

                    <p>Our team will help you decide which initial visit option best fits your needs: the "Single Problem Visit" for a specific concern, or the "Comprehensive Examination" for an in-depth exploration of your overall oral health with Dr. Lima.</p>
                </div>

                <div class="chapter-conclusion">
                    <h2>Your Journey to an Epic Smile Starts Here</h2>
                    <p>If you've been thinking about your dental health or searching for a dental home where you feel valued and understood, we encourage you to take that next step. The path to an epic smile begins with a simple conversation.</p>
                </div>
            `
        }
    };

    let currentChapter = 1;

    window.loadChapter = function(chapterNumber) {
        const chapter = chapters[chapterNumber];
        if (chapter) {
            currentChapter = chapterNumber;

            chapterHeader.textContent = chapter.header;
            chapterSubtitle.textContent = chapter.subtitle;
            heroImage.src = chapter.hero;
            heroImage.alt = `${chapter.header} - Epic Smiles of Conroe`;
            chapterContent.innerHTML = chapter.content;

            // Update chapter counter
            chapterCounter.textContent = `Chapter ${chapterNumber} of 8`;

            // Update active chapter button
            document.querySelectorAll('.chapter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            const activeBtn = document.querySelector(`[data-chapter="${chapterNumber}"]`);
            if (activeBtn) {
                activeBtn.classList.add('active');
            }

            // Update chapter dots
            document.querySelectorAll('.chapter-dot').forEach(dot => {
                dot.classList.remove('active');
            });
            const activeDot = document.querySelector(`[data-dot="${chapterNumber}"]`);
            if (activeDot) {
                activeDot.classList.add('active');
            }

            // Update navigation buttons with dynamic titles
            updateNavigationButtons(chapterNumber);
            updateHeroNavigation(chapterNumber);

            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    function updateNavigationButtons(currentChapter) {
        const prevChapter = currentChapter - 1;
        const nextChapter = currentChapter + 1;

        // Handle previous button
        if (prevChapter < 1) {
            // Hide previous button and add spacer
            prevButton.classList.add('hidden');
            if (!document.querySelector('.nav-spacer')) {
                const spacer = document.createElement('div');
                spacer.className = 'nav-spacer';
                prevButton.parentNode.insertBefore(spacer, prevButton);
            }
        } else {
            // Show previous button and remove spacer
            prevButton.classList.remove('hidden');
            const spacer = document.querySelector('.nav-spacer');
            if (spacer) {
                spacer.remove();
            }

            prevButton.innerHTML = `
                <div class="nav-btn-direction">← Previous</div>
                <div class="nav-btn-title">${chapters[prevChapter].shortTitle}</div>
            `;
            prevButton.disabled = false;
        }

        // Handle next button
        if (nextChapter > 8) {
            nextButton.disabled = true;
            nextButton.innerHTML = `
                <div class="nav-btn-direction">You've reached the end</div>
                <div class="nav-btn-title">Thank you for reading</div>
            `;
        } else {
            nextButton.disabled = false;
            nextButton.innerHTML = `
                <div class="nav-btn-direction">Next →</div>
                <div class="nav-btn-title">${chapters[nextChapter].shortTitle}</div>
            `;
        }
    }

    function updateHeroNavigation(currentChapter) {
        // Handle hero previous button
        if (currentChapter <= 1) {
            heroPrevButton.classList.add('hidden');
        } else {
            heroPrevButton.classList.remove('hidden');
        }

        // Handle hero next button
        if (currentChapter >= 8) {
            heroNextButton.classList.add('hidden');
        } else {
            heroNextButton.classList.remove('hidden');
        }
    }

    // Event listeners for main navigation buttons
    prevButton.addEventListener('click', () => {
        if (currentChapter > 1) {
            loadChapter(currentChapter - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentChapter < 8) {
            loadChapter(currentChapter + 1);
        }
    });

    // Event listeners for hero navigation buttons
    heroPrevButton.addEventListener('click', () => {
        if (currentChapter > 1) {
            loadChapter(currentChapter - 1);
        }
    });

    heroNextButton.addEventListener('click', () => {
        if (currentChapter < 8) {
            loadChapter(currentChapter + 1);
        }
    });

    // Event listeners for chapter number buttons
    document.querySelectorAll('.chapter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const chapterNum = parseInt(btn.dataset.chapter);
            loadChapter(chapterNum);
        });
    });

    // Event listeners for chapter dots (clickable)
    document.querySelectorAll('.chapter-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const chapterNum = parseInt(dot.dataset.dot);
            loadChapter(chapterNum);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentChapter > 1) {
            loadChapter(currentChapter - 1);
        } else if (e.key === 'ArrowRight' && currentChapter < 8) {
            loadChapter(currentChapter + 1);
        }
    });

    // Load initial chapter
    loadChapter(1);
});