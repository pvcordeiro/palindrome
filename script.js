const inputElement = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const inputValue = inputElement.value.trim();

    if (!inputValue) {
        alert("Please input a value");
        return;
    }

    const processedInput = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "");
    const isPalindrome =
        processedInput === processedInput.split("").reverse().join("");

    if (isPalindrome) {
        resultElement.innerHTML = `<strong>${inputValue}</strong> is a palindrome`;
    } else {
        resultElement.innerHTML = `<strong>${inputValue}</strong> is not a palindrome`;
    }

    resultElement.classList.remove("hidden");
    resultElement.classList.add("results-div");
});
