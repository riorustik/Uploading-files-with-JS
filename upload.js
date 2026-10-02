export function upload(selector) {
    const input = document.querySelector(selector);

    const open = document.createElement('button');
    open.classList.add('btn');
    open.textContent = 'open';
    input.insertAdjacentElement('afterend', open);

    const triggerInput = () => input.click()
    open.addEventListener('click', triggerInput)
}