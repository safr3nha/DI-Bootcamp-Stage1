(function(numChildren, partnerName, location, jobTitle) {
    const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    const container = document.createElement("p");
    container.textContent = sentence;
    document.body.appendChild(container);
})(3, "Alex", "Tokyo", "Software Engineer");