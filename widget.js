const style = document.createElement('style');
style.innerHTML = `
    .discord-button-wrapper {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 200;
    }

    .bmdiscord {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgb(56, 62, 148), rgb(122, 94, 159), rgb(189, 126, 169));
        transition: 0.5s;
        cursor: pointer;
        box-shadow: 0px 1px 7px rgba(136, 136, 136, 0.4);
        animation: 2s ease 1s infinite normal none running bmAN;
        text-decoration: none;
    }

    .discord-logo {
        width: 45px;
        height: 45px;
        background: url('https://panel.blademind.eu//favicons/favicon-blade1.png') no-repeat center/contain;
    }

    .join-us {
        display: none;
        position: absolute;
        right: 80px;
        top: 50%;
        transform: translateY(-50%);
        padding: 10px;
        background-color: #333;
        color: white;
        border-radius: 5px;
        font-size: 14px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        white-space: nowrap;
        z-index: 300;
    }

    .join-us::after {
        content: '';
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent transparent #333;
    }

    @keyframes bmAN {
        0% { transform: scale3d(1, 1, 1); }
        50% { transform: scale3d(1.1, 1.1, 1.1); }
        100% { transform: scale3d(1, 1, 1); }
    }

    .bmdiscord:hover {
        transform: scale(1.0);
        animation: pulse 2s ease 1s infinite;
    }
`;
document.head.appendChild(style);

const wrapper = document.createElement('div');
wrapper.classList.add('discord-button-wrapper');
wrapper.innerHTML = `
    <div class="join-us" id="join-us">Join onze Discord!</div>
    <a class="bmdiscord" href="https://discord.blademind.eu" target="_blank">
        <div class="discord-logo"></div>
    </a>
`;
document.body.appendChild(wrapper);

window.addEventListener('load', function() {
    if (!sessionStorage.getItem('join-usShown')) {
        setTimeout(function() {
            document.getElementById('join-us').style.display = 'block';
        }, 1000);

        setTimeout(function() {
            document.getElementById('join-us').style.display = 'none';
            sessionStorage.setItem('join-usShown', 'true');
        }, 6000);
    }
});


