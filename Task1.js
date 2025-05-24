document.getElementById("generateBtn").addEventListener("click", function () {
    const name = document.getElementById("userName").value.trim();
    const intention = document.getElementById("userIntention").value.trim().toLowerCase();
    const display = document.getElementById("displayAffirmation");

    if (name === "" || intention === "") {
        display.innerHTML = "<strong>Please enter both your name and your intention.</strong>";
        return;
    }

    let summary = "";

    switch (intention) {
        case "peace":
            summary = `
                <strong>${name}, you are a vessel of peace.</strong><br>
                Your mind is calm, your heart is open, and your spirit is still.<br>
                Today, you move through the world with gentle clarity.<br>
                Let serenity guide every step you take.`;
            break;
        case "success":
            summary = `
                <strong>${name}, success is already within you.</strong><br>
                Every action you take aligns with your highest potential.<br>
                You are capable, focused, and determined.<br>
                Today is another step toward your brightest achievements.`;
            break;
        case "creativity":
            summary = `
                <strong>${name}, your creativity flows like a river.</strong><br>
                New ideas bloom effortlessly in your mind.<br>
                You are fearless in expressing your unique vision.<br>
                Let today be filled with imagination and inspiration.`;
            break;
        case "confidence":
            summary = `
                <strong>${name}, you radiate confidence in all you do.</strong><br>
                You trust your instincts and own your decisions.<br>
                Doubt fades when you stand tall in your truth.<br>
                Today, you are bold, capable, and unstoppable.`;
            break;
        case "gratitude":
            summary = `
                <strong>${name}, gratitude shapes your perspective.</strong><br>
                You recognize the beauty in every small moment.<br>
                Appreciation fills your heart and lifts your spirit.<br>
                Today, you honor your journey and those who walk with you.`;
            break;
        case "love":
            summary = `
                <strong>${name}, love surrounds you and flows from within.</strong><br>
                Your heart is open, welcoming, and full of warmth.<br>
                You give and receive love freely and joyfully.<br>
                Let today be a celebration of connection and care.`;
            break;
        default:
            summary = `
                <strong>${name}, today you embrace the power of ${intention}.</strong><br>
                This intention fuels your choices and mindset.<br>
                You are aligned with its energy and guided by it.<br>
                Let every moment reflect your commitment to growth.`;
    }

    display.innerHTML = summary;
});
