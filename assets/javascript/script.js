function darkMode() {
    if (confirm('Do you want to activate dark mode?')==true) {
        document.body.style.backgroundColor = 'black';
    }else{
        document.body.style.backgroundColor = 'white';
    }
}
function ageChecker() {
    let age = prompt('How Old Are You?', 'Enter your age here');
    if (age !=null) {
        if (age < 18) {
            alert('Sorry, you are too young to view this page');
        }else{
            alert('Welcome to the site');
        }
    }else{
        alert('You have cancelled the age check');
    }
}