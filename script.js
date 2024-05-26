document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const action = key.getAttribute('data-action');
            const currentValue = display.value;
            
            switch(action) {
                case 'clear':
                    display.value = '';
                    break;
                case 'delete':
                    display.value = currentValue.slice(0, -1);
                    break;
                case 'equals':
                    try {
                        display.value = eval(currentValue);
                    } catch (error) {
                        display.value = 'Error';
                    }
                    break;
                case 'sin':
                    display.value = Math.sin(toRadians(currentValue));
                    break;
                case 'cos':
                    display.value = Math.cos(toRadians(currentValue));
                    break;
                case 'tan':
                    display.value = Math.tan(toRadians(currentValue));
                    break;
                case 'log':
                    display.value = Math.log10(currentValue);
                    break;
                case 'sqrt':
                    display.value = Math.sqrt(currentValue);
                    break;
                case 'exp':
                    display.value = Math.exp(currentValue);
                    break;
                case 'add':
                    display.value += '+';
                    break;
                case 'subtract':
                    display.value += '-';
                    break;
                case 'multiply':
                    display.value += '*';
                    break;
                case 'divide':
                    display.value += '/';
                    break;
                case 'decimal':
                    if (!currentValue.includes('.')) {
                        display.value += '.';
                    }
                    break;
                default:
                    display.value += action;
                    break;
            }
        });
    });

    function toRadians(degrees) {
        return degrees * Math.PI / 180;
    }
});
