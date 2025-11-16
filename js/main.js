     // Quiz data structure
        const quizData = {
            "1": [
                {
                    question: "An embedded system is designed to perform:",
                    options: [
                        "Many different functions",
                        "A specific function",
                        "General computing tasks",
                        "Only input operations"
                    ],
                    answer: 1
                },
                {
                    question: "The three things an embedded system is a combination of are:",
                    options: [
                        "Processor, Memory, I/O",
                        "Hardware, Software, and Mechanical Components",
                        "SB, SoC, and IC",
                        "GPU, DSP, and CPU"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: An embedded system is designed to do many tasks simultaneously, like a laptop.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 1
                },
                {
                    question: "In a washing machine, the motor and water control valves are examples of:",
                    options: [
                        "Hardware",
                        "Software",
                        "Mechanical Components",
                        "Firmware"
                    ],
                    answer: 2
                },
                {
                    question: "In a washing machine, the chip that holds the code for monitoring operations is the:",
                    options: [
                        "Hardware",
                        "Software (Firmware)",
                        "Mechanical Component",
                        "System Board"
                    ],
                    answer: 1
                },
                {
                    question: "The 'Control Unit' of an embedded system typically consists of:",
                    options: [
                        "Buttons and Display",
                        "Processor, RAM, and ROM (with Software)",
                        "Motor and Chassis",
                        "Breadboard and Wires"
                    ],
                    answer: 1
                },
                {
                    question: "In an Air Conditioner, the software monitors the external temperature through:",
                    options: [
                        "The Remote",
                        "The Buzzer",
                        "Infrared Sensors",
                        "The Motor"
                    ],
                    answer: 2
                },
                {
                    question: "True or False: An embedded system will always have a chip (microprocessor or microcontroller) that holds the software.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                },
                {
                    question: "Embedded systems are described as having:",
                    options: [
                        "Generic hardware and software",
                        "Specialized hardware and software",
                        "No hardware",
                        "No software"
                    ],
                    answer: 1
                },
                {
                    question: "What are the three main components of any computing system?",
                    options: [
                        "Hardware, Software, Mechanical",
                        "Processor, Memory, I/O",
                        "SB, SoC, VLSI",
                        "CPU, GPU, DSP"
                    ],
                    answer: 1
                }
            ],
            "2": [
                {
                    question: "What does 'MP' represent?",
                    options: [
                        "Memory",
                        "CPU (Primary Processor)",
                        "Secondary Processors",
                        "I/O"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: The components inside an MP (Microprocessor) include the ALU, CU, and RF.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                },
                {
                    question: "Which component is specified for handling complex computations like Fourier transform to reduce the load on the primary processor?",
                    options: [
                        "ALU",
                        "CU",
                        "DSP",
                        "GPU"
                    ],
                    answer: 2
                },
                {
                    question: "A system integrating MP, Memory, I/O, GPU, and DSP on a single chip is known as:",
                    options: [
                        "System on Chip (SoC)",
                        "Microcontroller (MCU)",
                        "Electrical Control Unit (ECU)",
                        "Arithmetic and Logic Unit (ALU)"
                    ],
                    answer: 0
                },
                {
                    question: "True or False: According to the lecture, a System on Chip (SoC) is considered a high-performance MCU (Microcontroller).",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                },
                {
                    question: "Which type of software application does an SoC (System on Chip) typically deal with, according to the presentation?",
                    options: [
                        "BareMetal SW",
                        "OS Applications",
                        "Only Drivers",
                        "Only the Kernel"
                    ],
                    answer: 1
                },
                {
                    question: "Which of the following is given as an example of an OS Application (Non-BareMetal SW)?",
                    options: [
                        "Arduino",
                        "Embedded Linux",
                        "SCADA",
                        "Digital Telephone Keypads"
                    ],
                    answer: 1
                },
                {
                    question: "How is an ECU (Electrical Control Unit) defined in the lecture?",
                    options: [
                        "A Kit (like Arduino) combined with Sensors & Actuators",
                        "A standalone System on Chip (SoC)",
                        "A Microprocessor (MP) and Memory",
                        "A device that only converts physical events to electrical signals"
                    ],
                    answer: 0
                },
                {
                    question: "What is the primary function of a Sensor?",
                    options: [
                        "Convert electrical signals into physical events",
                        "Convert physical events into electrical signals",
                        "Take input from the system and give output to the environment",
                        "Examples include motors and heaters"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: An actuator takes input from the system and gives output to the environment.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                }
            ],
            "3": [
                {
                    question: "Which of the following is categorized under 'Consumer Electronics' as an application of embedded systems?",
                    options: [
                        "Washing machine",
                        "Camcorder",
                        "Network router",
                        "Fire alarm"
                    ],
                    answer: 1
                },
                {
                    question: "Washing machines and refrigerators are given as examples of embedded systems in which application area?",
                    options: [
                        "Consumer Electronics",
                        "Home Automation",
                        "Household Appliances",
                        "Automotive Industry"
                    ],
                    answer: 2
                },
                {
                    question: "In the automotive industry context, what does 'ABS' stand for?",
                    options: [
                        "Advanced Braking System",
                        "Anti-lock Braking System",
                        "Automated Bypass System",
                        "Auxiliary Braking Sensor"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: The Anti-lock Braking System (ABS) works by using wheel speed sensors and an Electronic Control Unit (ECU).",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                },
                {
                    question: "Fire alarms, air conditioners, and sprinklers are listed as examples in which application category?",
                    options: [
                        "Healthcare",
                        "Telecom",
                        "Home automation & security systems",
                        "Computer peripherals"
                    ],
                    answer: 2
                },
                {
                    question: "True or False: Cellular phones and telephone switches are classified as applications in the 'Telecom' domain.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                },
                {
                    question: "EEG and ECG machines are examples of embedded systems used in which field?",
                    options: [
                        "Banking & Retail",
                        "Healthcare",
                        "Consumer Electronics",
                        "Automotive Industry"
                    ],
                    answer: 1
                },
                {
                    question: "All of the following are listed as primary purposes of embedded systems EXCEPT:",
                    options: [
                        "Data Collection/Storage/Representation",
                        "Control",
                        "Data (Signal) Processing",
                        "Automotive Industry"
                    ],
                    answer: 3
                },
                {
                    question: "True or False: According to the lecture, the 'Data Collection' purpose only involves acquiring digital data, not analog data.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 1
                },
                {
                    question: "Network hubs, routers, and switches are typical examples of embedded systems dedicated to what purpose?",
                    options: [
                        "Monitoring",
                        "Data Communication",
                        "Control",
                        "Data (Signal) Processing"
                    ],
                    answer: 1
                }
            ],
            "4": [
                {
                    question: "True or False: The 'Specification' is generally less precise than the 'Requirements'.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 1
                },
                {
                    question: "The 'Specification' serves as the contract between:",
                    options: [
                        "The hardware team and the software team",
                        "The customer and the architects",
                        "The professor and the student",
                        "The CPU and the Memory"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: The 'Specification' must be understandable so that it can meet the customer's requirements.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                },
                {
                    question: "According to the lecture, all of the following are components of a GPS system's specification EXCEPT:",
                    options: [
                        "Map data",
                        "User interface",
                        "Manufacturing cost",
                        "Data received from GPS satellite"
                    ],
                    answer: 2
                },
                {
                    question: "True or False: 'Background actions required to keep the system running' are considered part of the GPS specification.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                },
                {
                    question: "The 'Architecture design' step is concerned with defining:",
                    options: [
                        "Only hardware components",
                        "Only software components",
                        "Hardware and software components",
                        "Only the user interface"
                    ],
                    answer: 2
                },
                {
                    question: "CPUs and peripherals are examples of which type of architectural component?",
                    options: [
                        "Software components",
                        "Hardware components",
                        "Non-functional components",
                        "Specification components"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: Major data structures are considered a hardware component in the architecture design.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: The architecture design must account for both functional and non-functional specifications.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                },
                {
                    question: "In the GPS moving map block diagram, which component is responsible for finding relevant data from the map database?",
                    options: [
                        "GPS Receiver",
                        "Renderer",
                        "Search Engine",
                        "Display"
                    ],
                    answer: 2
                }
            ],
            "5": [
                {
                    question: "What does 'RF' stand for in the context of a processor's components?",
                    options: [
                        "Random File",
                        "Register Files",
                        "Read-Only File",
                        "Repeater Function"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: The Program Counter (PC) is a register located inside the Control Unit (CU).",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 1
                },
                {
                    question: "How does the Program Counter (PC) know its first (initial) location?",
                    options: [
                        "Using the ALU",
                        "Using the startup code",
                        "It always starts at 0",
                        "It is set by the Instruction Register"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: C Code is compiled directly into Machine Language (0s and 1s) in one step.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 1
                },
                {
                    question: "The final Machine Language (set of instructions) is shown to be stored in:",
                    options: [
                        "ROM",
                        "ALU",
                        "CU",
                        "RF"
                    ],
                    answer: 0
                },
                {
                    question: "A program counter is a special register that contains the memory address of the:",
                    options: [
                        "Current instruction being executed",
                        "Next program instruction to be executed",
                        "Previous instruction that was executed",
                        "First instruction in the entire program"
                    ],
                    answer: 1
                },
                {
                    question: "In the detailed CPU diagram (Slide 7), what does 'IR' stand for?",
                    options: [
                        "Instruction Register",
                        "Internal RAM",
                        "Interrupt Request",
                        "Instruction ROM"
                    ],
                    answer: 0
                },
                {
                    question: "In the detailed CPU diagram (Slide 7), what does 'MAR' stand for?",
                    options: [
                        "Memory Access Register",
                        "Memory Address Register",
                        "Main ALU Register",
                        "Micro-operation Register"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: Before the CPU fetches an instruction, it references the Program Counter for the correct memory address.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                },
                {
                    question: "The CPU increases the Program Counter (PC):",
                    options: [
                        "Before it fetches the instruction",
                        "After it fetches the instruction",
                        "After it decodes the instruction",
                        "After it executes the instruction"
                    ],
                    answer: 1
                }
            ],
            "6": [
                {
                    question: "What are the two primary types of register files mentioned?",
                    options: [
                        "ALU Registers and CU Registers",
                        "General Purpose Registers (GPR) and Special Purpose Registers (SPR)",
                        "Data Registers and Address Registers",
                        "ROM Registers and RAM Registers"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: General Purpose Registers (GPRs) are used to store data permanently.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 1
                },
                {
                    question: "In C language, what is the intended effect of using the register keyword before a variable?",
                    options: [
                        "To store the variable in RAM permanently",
                        "To suggest storing the variable in a GPR for faster access",
                        "To convert the variable into a Special Purpose Register",
                        "To guarantee the variable is stored in the Program Counter"
                    ],
                    answer: 1
                },
                {
                    question: "True or False: Using the register keyword in C guarantees that the variable will be stored in a GPR.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 1
                },
                {
                    question: "Which Special Purpose Register holds the memory address of the next instruction to be executed?",
                    options: [
                        "Stack Pointer (SP)",
                        "Instruction Register (IR)",
                        "Program Counter (PC)",
                        "Accumulator (ACC)"
                    ],
                    answer: 2
                },
                {
                    question: "What is the primary function of the Stack Pointer (SP)?",
                    options: [
                        "To store the memory address of the last data element added to the stack",
                        "To store the result of the last ALU operation",
                        "To store the current instruction being decoded",
                        "To hold all the GPRs"
                    ],
                    answer: 0
                },
                {
                    question: "The stack is a specific region of memory that stores temporary data in what manner?",
                    options: [
                        "FIFO (First In, First Out)",
                        "LIFO (Last In, First Out)",
                        "Random Access",
                        "FILO (First In, Last Out)"
                    ],
                    answer: 1
                },
                {
                    question: "Which register stores the instruction after it has been fetched from memory?",
                    options: [
                        "Program Counter (PC)",
                        "Process Status Word (PSW)",
                        "Accumulator (ACC)",
                        "Instruction Register (IR)"
                    ],
                    answer: 3
                },
                {
                    question: "True or False: The Accumulator (ACC) is a register that is unavailable or uncommon in modern microprocessors.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 0
                },
                {
                    question: "What is the Process Status Word (PSW)?",
                    options: [
                        "A register that stores the next instruction's address",
                        "A register that temporarily stores data for the ALU",
                        "A set of flags where each bit has a specific function",
                        "A register that holds the instruction fetched from memory"
                    ],
                    answer: 2
                }
            ],
            "7": [
                {
                    question: "What term is used to describe the action of reading or writing from memory?",
                    options: [
                        "Access the memory",
                        "Bus the memory",
                        "Port the memory",
                        "Control the memory"
                    ],
                    answer: 0
                },
                {
                    question: "True or False: Read (r) access time is bigger (longer) than write (w) access time.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 1
                },
                {
                    question: "A single bit in memory is constructed from which electronic component?",
                    options: [
                        "A capacitor",
                        "A resistor",
                        "A D-flip-flop",
                        "A MOSFET"
                    ],
                    answer: 2
                },
                {
                    question: "How many D-flip-flops are required to construct one 8-bit register?",
                    options: [
                        "1",
                        "4",
                        "8",
                        "16"
                    ],
                    answer: 2
                },
                {
                    question: "What three components make up the 'Bus Set' used to connect the CPU and Memory?",
                    options: [
                        "Data bus, Address bus, & Control bus",
                        "SRAM bus, DRAM bus, & ROM bus",
                        "Read bus, Write bus, & Access bus",
                        "Port A, Port B, & Port C"
                    ],
                    answer: 0
                },
                {
                    question: "Which bus determines the location in memory that the processor will read from or write to?",
                    options: [
                        "Data bus",
                        "Control bus",
                        "System bus",
                        "Address bus"
                    ],
                    answer: 3
                },
                {
                    question: "Which bus contains the contents (data) that have been read from memory or are to be written to memory?",
                    options: [
                        "Data bus",
                        "Address bus",
                        "Control bus",
                        "I/O bus"
                    ],
                    answer: 0
                },
                {
                    question: "Which bus manages the information flow and indicates whether an operation is a 'read' or a 'write'?",
                    options: [
                        "Data bus",
                        "Address bus",
                        "Control bus",
                        "System bus"
                    ],
                    answer: 2
                },
                {
                    question: "True or False: The term '32-bit pc' or '64-bit pc' refers to the number of wires in the control bus.",
                    options: [
                        "True",
                        "False"
                    ],
                    answer: 1
                },
                {
                    question: "In the example of a 'write' operation, the Address Bus holds '3001' and the Data Bus holds '111'. What does the Control Bus hold to indicate 'write'?",
                    options: [
                        "0",
                        "1",
                        "3001",
                        "111"
                    ],
                    answer: 1
                }
            ]
        };

        // App state
        let currentLecture = "1";
        let currentQuestion = 0;
        let userAnswers = {};
        let quizStarted = false;
        let timerInterval;
        let timeElapsed = 0;

        // DOM elements
        const lectureBtns = document.querySelectorAll('.lecture-btn');
        const quizContainer = document.getElementById('quiz-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        const resultsContainer = document.getElementById('results-container');
        const scoreElement = document.getElementById('score');
        const percentageElement = document.getElementById('percentage');
        const restartBtn = document.getElementById('restart-btn');
        const progressBar = document.getElementById('progress');
        const timerElement = document.getElementById('timer');

        // Initialize the app
        function init() {
            // Set up lecture selection
            lectureBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const lecture = btn.getAttribute('data-lecture');
                    selectLecture(lecture);
                });
            });

            // Set up navigation
            prevBtn.addEventListener('click', showPreviousQuestion);
            nextBtn.addEventListener('click', showNextQuestion);
            submitBtn.addEventListener('click', submitQuiz);
            restartBtn.addEventListener('click', restartQuiz);

            // Load the first lecture
            selectLecture(currentLecture);
        }

        // Select a lecture
        function selectLecture(lecture) {
            // Update active button
            lectureBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-lecture') === lecture) {
                    btn.classList.add('active');
                }
            });

            // Update current lecture
            currentLecture = lecture;
            currentQuestion = 0;
            userAnswers = {};
            quizStarted = false;
            
            // Reset timer
            clearInterval(timerInterval);
            timeElapsed = 0;
            updateTimer();
            
            // Show quiz questions
            showQuestion();
            
            // Hide results
            resultsContainer.style.display = 'none';
            quizContainer.style.display = 'block';
            
            // Update navigation buttons
            updateNavigation();
        }

        // Show current question
        function showQuestion() {
            const questions = quizData[currentLecture];
            if (!questions || questions.length === 0) {
                quizContainer.innerHTML = '<p>No questions available for this lecture.</p>';
                return;
            }

            const question = questions[currentQuestion];
            let optionsHTML = '';

            question.options.forEach((option, index) => {
                const isSelected = userAnswers[currentQuestion] === index;
                optionsHTML += `
                    <div class="option ${isSelected ? 'selected' : ''}" data-index="${index}">
                        ${option}
                    </div>
                `;
            });

            quizContainer.innerHTML = `
                <div class="question-container">
                    <div class="question-number">Question ${currentQuestion + 1} of ${questions.length}</div>
                    <div class="question-text">${question.question}</div>
                    <div class="options-container">
                        ${optionsHTML}
                    </div>
                </div>
            `;

            // Add event listeners to options
            const options = quizContainer.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    selectOption(parseInt(option.getAttribute('data-index')));
                });
            });

            // Update progress bar
            progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
            
            // Start timer if this is the first question
            if (!quizStarted) {
                quizStarted = true;
                startTimer();
            }
        }

        // Select an option
        function selectOption(index) {
            userAnswers[currentQuestion] = index;
            
            // Update UI
            const options = quizContainer.querySelectorAll('.option');
            options.forEach(option => {
                option.classList.remove('selected');
                if (parseInt(option.getAttribute('data-index')) === index) {
                    option.classList.add('selected');
                }
            });
            
            // Enable next button if not on last question
            if (currentQuestion < quizData[currentLecture].length - 1) {
                nextBtn.disabled = false;
            } else {
                submitBtn.disabled = false;
            }
        }

        // Show previous question
        function showPreviousQuestion() {
            if (currentQuestion > 0) {
                currentQuestion--;
                showQuestion();
                updateNavigation();
            }
        }

        // Show next question
        function showNextQuestion() {
            const questions = quizData[currentLecture];
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                showQuestion();
                updateNavigation();
            }
        }

        // Update navigation buttons
        function updateNavigation() {
            const questions = quizData[currentLecture];
            
            // Previous button
            prevBtn.disabled = currentQuestion === 0;
            
            // Next button
            if (currentQuestion < questions.length - 1) {
                nextBtn.disabled = userAnswers[currentQuestion] === undefined;
            } else {
                nextBtn.disabled = true;
            }
            
            // Submit button
            submitBtn.disabled = !allQuestionsAnswered();
        }

        // Check if all questions are answered
        function allQuestionsAnswered() {
            const questions = quizData[currentLecture];
            for (let i = 0; i < questions.length; i++) {
                if (userAnswers[i] === undefined) {
                    return false;
                }
            }
            return true;
        }

        // Start the timer
        function startTimer() {
            timerInterval = setInterval(() => {
                timeElapsed++;
                updateTimer();
            }, 1000);
        }

        // Update timer display
        function updateTimer() {
            const minutes = Math.floor(timeElapsed / 60);
            const seconds = timeElapsed % 60;
            timerElement.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // Submit the quiz
        function submitQuiz() {
            clearInterval(timerInterval);
            
            const questions = quizData[currentLecture];
            let score = 0;
            
            // Calculate score
            for (let i = 0; i < questions.length; i++) {
                if (userAnswers[i] === questions[i].answer) {
                    score++;
                }
            }
            
            // Display results
            const percentage = Math.round((score / questions.length) * 100);
            scoreElement.textContent = `${score}/${questions.length}`;
            percentageElement.textContent = `${percentage}%`;
            
            // Hide quiz and show results
            quizContainer.style.display = 'none';
            resultsContainer.style.display = 'block';
        }

        // Restart the quiz
        function restartQuiz() {
            currentQuestion = 0;
            userAnswers = {};
            quizStarted = false;
            
            // Reset timer
            clearInterval(timerInterval);
            timeElapsed = 0;
            updateTimer();
            
            // Show quiz questions
            showQuestion();
            
            // Hide results
            resultsContainer.style.display = 'none';
            quizContainer.style.display = 'block';
            
            // Update navigation buttons
            updateNavigation();
        }

        // Initialize the app when the DOM is loaded
        document.addEventListener('DOMContentLoaded', init);