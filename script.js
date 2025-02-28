// Google Login Simulation
function loginWithGoogle() {
    alert("Logging in with Google...");
    window.location.href = "dashboard.html";
}

// Navigation
function navigateTo(page) {
    window.location.href = page;
}

// Chatbot Logic
function sendMessage() {
    let input = document.getElementById("chat-input").value.trim();
    let chatbox = document.getElementById("chat-window");
    
    if (input === "") return;

    // User message
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerHTML = "<strong>You:</strong> " + input;
    chatbox.appendChild(userMessage);

    // Bot response with a small delay for a more natural feel
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.classList.add("message", "bot");
        botMessage.innerHTML = "<strong>Bot:</strong> " + getBotResponse(input);
        chatbox.appendChild(botMessage);

        // Scroll to the latest message
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);

    // Clear input field
    document.getElementById("chat-input").value = "";
}

// Basic chatbot responses
function getBotResponse(input) {
    let responses = {
        "hello": "Hi! How can I help you today?",
        "what is a loan?": "A loan is a sum of money borrowed that must be repaid with interest.",
        "how to save money?": "Create a budget, track expenses, and cut unnecessary costs.",
        "How can I save money if I don’t earn much?" : "Keep a little aside every time you get paid.",
        "Where can I keep my money safe?" : "A bank account or a digital wallet is safer than cash.",
        "How do I open a bank account?" : "Visit a bank with an ID and a small deposit.",
        "Do I need to know reading to use a bank?" : "No, bank staff can help you",
        "Can I save money without a bank?" : "Yes, in trusted savings groups or self-help groups.",
        "How can I get a small loan?" : "Apply at microfinance banks or women’s self-help groups.",
        "Do I need papers to get a loan?" : " Some places ask for ID, but small loans may not.",
        "Can I borrow money without a job?" : "Some loans are for business ideas, not jobs.",
        "How do I return a loan?" : "Pay small amounts every month.",
        "What happens if I can’t pay my loan?" : "Talk to the lender and ask for more time.",
        "How can I earn money from home?" : "Selling handmade items, tailoring, or cooking.",
        "Where can I find work?" : "Local markets, factories, or women’s training centers.",
        "I don’t know how to read. Can I still get a job?" : "Yes, skills like sewing, farming, and cooking don’t need reading.",
        "Is online money safe?" : "Yes, but don’t share your PIN with anyone."

    };

    return responses[input.toLowerCase()] || "Sorry, I don't understand that.";
}


// --------------------------------------
// Wallet Features
// --------------------------------------

// Transaction Data
const transactions = [
    { date: '2025-02-20', description: 'Movie Tickets', amount: 600, type: 'Debit' },
    { date: '2025-02-22', description: 'Freelance Payment', amount: 15000, type: 'Credit' },
    { date: '2025-02-23', description: 'Online Shopping', amount: 4000, type: 'Debit' }
];

// Function to Load Transactions
function loadTransactions() {
    let tableBody = document.getElementById("transaction-table-body");
    tableBody.innerHTML = ""; // Clear existing rows

    transactions.forEach((tx) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${tx.date}</td>
            <td>${tx.description}</td>
            <td class="${tx.type === 'Credit' ? 'credit' : 'debit'}">₹${tx.amount}</td>
        `;
        tableBody.appendChild(row);
    });
}

// --------------------------------------
// Savings Goals Feature
// --------------------------------------

// Savings Goals Data
let savingsGoals = [
    { goal: 'Buy a Smartphone', targetAmount: 20000, currentAmount: 5000 },
    { goal: 'Emergency Fund', targetAmount: 100000, currentAmount: 25000 }
];

// Function to Display Goals
function loadGoals() {
    let goalsList = document.getElementById("goals-list");
    goalsList.innerHTML = ""; // Clear existing goals

    savingsGoals.forEach((goal, index) => {
        let progress = (goal.currentAmount / goal.targetAmount) * 100;
        let listItem = document.createElement("div");
        listItem.classList.add("goal-item");
        listItem.innerHTML = `
            <p><strong>${goal.goal}</strong> - ₹${goal.currentAmount} / ₹${goal.targetAmount}</p>
            <progress value="${progress}" max="100"></progress>
        `;
        goalsList.appendChild(listItem);
    });
}

// --------------------------------------
// Reward System
// --------------------------------------

// Reward System
let rewardPoints = 250;  // Default reward points

function earnRewards(points) {
    rewardPoints += points;
    document.getElementById("rewardPoints").textContent = rewardPoints;
}

// --------------------------------------
// Add Bank Links for Net Banking & Credit/Debit
// --------------------------------------

// List of Indian Bank Links
const bankLinks = [
    { name: "Kotak Mahindra Bank", url: "https://www.kotak.com/" },
    { name: "Yes Bank", url: "https://www.yesbank.in/" },
    { name: "Canara Bank", url: "https://netbanking.canarabank.in/" },
    { name: "SBI Bank", url: "https://www.onlinesbi.sbi/" },
    { name: "HDFC Bank", url: "https://www.hdfcbank.com/" },
    { name: "ICICI Bank", url: "https://www.icicibank.com/" },
    { name: "Axis Bank", url: "https://www.axisbank.com/" }
];

// Function to Load Bank Links
function loadBankLinks() {
    let bankList = document.getElementById("bank-list");
    bankList.innerHTML = ""; // Clear existing list

    bankLinks.forEach((bank) => {
        let bankItem = document.createElement("li");
        bankItem.innerHTML = `<a href="${bank.url}" target="_blank">${bank.name}</a>`;
        bankList.appendChild(bankItem);
    });
}

// --------------------------------------
// Page-Specific Initializations
// --------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("wallet.html")) {
        loadTransactions();
        loadGoals();
        document.getElementById("rewardPoints").textContent = rewardPoints;
        loadBankLinks();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const courseraLink = document.querySelector('.coursera-link a');
    courseraLink.addEventListener('click', function() {
        alert('You are being redirected to Coursera for more courses and certifications.');
    });
});
// Function to add a new post
function addPost() {
    let content = document.getElementById("postContent").value;
    if (content.trim() === "") {
        alert("Post cannot be empty!");
        return;
    }

    let postList = document.getElementById("postList");

    // Create post container
    let post = document.createElement("div");
    post.classList.add("post");

    // Add post content
    let postText = document.createElement("p");
    postText.innerHTML = `<strong>You:</strong> ${content}`;
    post.appendChild(postText);

    // Create comment section
    let commentSection = document.createElement("div");
    commentSection.classList.add("comment-section");

    let commentBox = document.createElement("input");
    commentBox.classList.add("comment-box");
    commentBox.type = "text";
    commentBox.placeholder = "Add a comment...";
    
    let commentButton = document.createElement("button");
    commentButton.textContent = "Comment";
    commentButton.onclick = function() {
        addComment(commentSection, commentBox.value);
        commentBox.value = "";
    };

    commentSection.appendChild(commentBox);
    commentSection.appendChild(commentButton);

    post.appendChild(commentSection);
    postList.prepend(post); // Adds the newest post on top

    // Clear input field
    document.getElementById("postContent").value = "";
}

// Function to add comments to posts
function addComment(commentSection, commentText) {
    if (commentText.trim() === "") return;

    let comment = document.createElement("p");
    comment.innerHTML = `<strong>Guest:</strong> ${commentText}`;
    commentSection.appendChild(comment);
}

// Navigation function
function navigateTo(page) {
    window.location.href = page;
}
// Function to calculate financial score
function calculateScore() {
    let score = 0;

    // Correct answers
    let answers = {
        q1: "B",
        q2: "B",
        q3: "A"
    };

    let form = document.getElementById("quizForm");
    let formData = new FormData(form);

    for (let key in answers) {
        if (formData.get(key) === answers[key]) {
            score++;
        }
    }

    let resultText = "";
    let adviceText = "";

    if (score === 3) {
        resultText = "🏆 Excellent! You have great financial knowledge!";
        adviceText = "Keep learning and investing wisely! You're on the right track!";
    } else if (score === 2) {
        resultText = "📈 Good job! But there's room for improvement.";
        adviceText = "Consider taking some financial courses to enhance your knowledge.";
    } else {
        resultText = "⚠ Needs Improvement. You should learn more about managing finances.";
        adviceText = "Start with our recommended courses to boost your financial literacy.";
    }

    document.getElementById("scoreResult").textContent = resultText;
    document.getElementById("advice").textContent = adviceText;
    document.getElementById("result-section").style.display = "block";
}
// Resume Upload Function
function uploadResume() {
    let fileInput = document.getElementById("resumeInput");
    if (fileInput.files.length > 0) {
        alert("✅ Resume uploaded successfully!");
    } else {
        alert("⚠ Please select a file to upload.");
    }
}

// Community Post Function
function postToCommunity() {
    let postText = document.getElementById("communityPost").value;
    if (postText.trim() === "") {
        alert("⚠ Please write something before posting.");
        return;
    }

    let postDiv = document.createElement("div");
    postDiv.textContent = postText;
    postDiv.style.border = "1px solid #ccc";
    postDiv.style.padding = "10px";
    postDiv.style.marginTop = "10px";
    postDiv.style.background = "#f8f8f8";

    document.getElementById("communityPosts").appendChild(postDiv);
    document.getElementById("communityPost").value = "";
}
// Update Profile Picture
function updateProfilePicture() {
    let file = document.getElementById("upload-pic").files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profile-pic").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Update Profile Name
function updateProfile() {
    let newName = document.getElementById("edit-name").value;
    if (newName.trim() !== "") {
        document.getElementById("user-name").textContent = newName;
        alert("✅ Profile updated successfully!");
    } else {
        alert("⚠ Please enter a valid name.");
    }
}

// Remove Bank Account
function removeBank(id) {
    let banks = document.getElementById("bank-list").getElementsByTagName("li");
    if (banks[id - 1]) {
        banks[id - 1].remove();
        alert("✅ Bank removed successfully!");
    }
}

// Change Password Simulation
function changePassword() {
    let newPassword = prompt("Enter new password:");
    if (newPassword) {
        alert("✅ Password changed successfully!");
    }
}

// Enable 2FA
function enable2FA() {
    alert("✅ Two-Factor Authentication enabled!");
}

// Enable Biometric Login
function toggleBiometric() {
    alert("✅ Biometric login enabled!");
}

// Navigation Function
function navigateTo(page) {
    window.location.href = page;
}
