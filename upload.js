export function upload(selector, options = {}) {
    const input = document.querySelector(selector);

    const open = document.createElement('button');
    open.classList.add('btn');
    open.textContent = 'open';

    if (options.multi) {
        input.setAttribute('multiple', true);
    }
    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept .join(','));
    }

    input.insertAdjacentElement('afterend', open);

    const triggerInput = () => input.click();
    open.addEventListener('click', triggerInput);

    const changeHandler = e => {

    }
    input.addEventListener('change', changeHandler);
}