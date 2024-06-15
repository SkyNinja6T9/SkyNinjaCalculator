function animations() {
var tl = gsap.timeline()
tl.to("#right",{
  x: 2000,
  duration:3,
  delay: 0.5,
  ease: "sine.out",
},"sky")
tl.to("#left",{
    x:-2000,
    duration:3,
    delay: 0.5,
    ease: "sine.out",
  },"sky")
  tl.from(".calc",{
    y:500,
    x:800,
    scale:0.2,
    opacity:0,
    ease:"back.out",
    opacity:0,
  })};
function calculator(){
    document.addEventListener('DOMContentLoaded', function() {
        // Selecting elements
        const input = document.getElementById('inputBox');
        const buttons = document.querySelectorAll('button');
        const operators = ['+', '-', '*', '/'];
    
        // Adding click event listeners to all buttons
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const action = button.getAttribute('data');
                const value = button.textContent;
    
                // Clear button ('AC') functionality
                if (action === 'Ac') {
                    input.value = '';
                    string = '';
                }
                // Delete button ('Dl') functionality
                else if (action === 'Dl') {
                    input.value = input.value.slice(0, -1);
                    string = input.value;
                }
                // Equals button ('=') functionality
                else if (action === '=') {
                    try {
                        const result = eval(string);
                        input.value = result;
                        string = result.toString(); // Store result as new string for further operations
                    } catch (error) {
                        input.value = 'Error';
                        string = '';
                    }
                }
                // Percentage button functionality
                else if (action === '%') {
                    // Extract the number before the percentage
                    const numbers = string.split(/[+\-*\/]/);
                    const lastNumber = numbers[numbers.length - 1];
    
                    // Calculate the percentage
                    const percentage = parseFloat(lastNumber) / 100;
    
                    // Replace the last number with the percentage in the string
                    string = string.replace(lastNumber, percentage);
                    input.value = string;
                }
                // Operator button functionality
                else if (operators.includes(action)) {
                    // Check if the last character of the string is an operator
                    const lastChar = string[string.length - 1];
                    if (operators.includes(lastChar)) {
                        // Replace the last operator with the new one
                        string = string.slice(0, -1) + action;
                    } else {
                        string += action;
                    }
                    input.value = string;
                }
                // Numeric and decimal point button functionality
                else {
                    string += value;
                    input.value = string;
                }
            });
        });
    
        // Initialize string to store the expression
        let string = '';
    });
};
function cursor(){
    document.addEventListener('DOMContentLoaded', function() {
        const dotCursor = document.createElement('div');
        dotCursor.classList.add('dot-cursor');
        document.body.appendChild(dotCursor);

        function moveDotCursor(event) {
            gsap.to(dotCursor, {
                duration: 0.2,
                x: event.clientX,
                y: event.clientY
            });
        }

        document.addEventListener('mousemove', moveDotCursor);
    });
    
};
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });
animations();
calculator();
cursor();
