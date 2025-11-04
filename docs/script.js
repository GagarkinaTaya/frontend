// script.js
document.addEventListener('DOMContentLoaded', () => {
    const network = document.getElementById('network');
    const router = document.getElementById('router');
    const devices = Array.from(document.querySelectorAll('.device'));
    const toggleAllBtn = document.getElementById('toggleAll');
    const pulseBtn = document.getElementById('pulseBtn');

    // Создаём линии и заполняем подсказки
    const lines = [];
    devices.forEach(device => {
        // добавить info текст из data-атрибутов
        const info = device.querySelector('.info');
        const name = device.dataset.name || 'Устройство';
        const std = device.dataset.std || '-';
        const freq = device.dataset.freq || '-';
        const speed = device.dataset.speed || '-';
        info.innerHTML = `<b>${name}</b>
      Стандарт: ${std}<br>
      Частота: ${freq}<br>
      Скорость: ${speed}`;

        // создаём DOM-элемент линии
        const line = document.createElement('div');
        line.className = 'line';
        network.appendChild(line);
        lines.push({ device, line });
    });

    // Обновить позицию линий (должно вызываться после отрисовки/resize)
    function updateLines() {
        const netRect = network.getBoundingClientRect();
        const routerRect = router.getBoundingClientRect();

        const routerCenterX = routerRect.left - netRect.left + routerRect.width / 2;
        const routerCenterY = routerRect.top - netRect.top + routerRect.height / 2;

        lines.forEach(({ device, line }) => {
            const dRect = device.getBoundingClientRect();
            const deviceCenterX = dRect.left - netRect.left + dRect.width / 2;
            const deviceCenterY = dRect.top - netRect.top + dRect.height / 2;

            // Расстояние между центрами
            const dist = Math.hypot(deviceCenterX - routerCenterX, deviceCenterY - routerCenterY);
            const angle = Math.atan2(deviceCenterY - routerCenterY, deviceCenterX - routerCenterX) * 180 / Math.PI;

            // Радиусы кружков
            const routerRadius = router.offsetWidth / 2;
            const deviceRadius = device.offsetWidth / 2;

            // Длина линии = расстояние между центрами МИНУС радиусы
            const lineLength = dist - routerRadius - deviceRadius;

            // Если линия слишком короткая (перекрытие), не рисуем
            if (lineLength <= 0) {
                line.style.width = '0';
                return;
            }

            // Позиционируем линию от центра роутера к краю
            line.style.left = `${routerCenterX}px`;
            line.style.top = `${routerCenterY}px`;
            line.style.width = `${lineLength}px`;
            line.style.transform = `rotate(${angle}deg)`;
            line.style.transformOrigin = 'left center';
        });
    }





    // Показать/скрыть подсказку на элементе
    function toggleDeviceInfo(dev, show) {
        if (show) dev.classList.add('show'); else dev.classList.remove('show');
    }

    // Наведение: показать подсказку
    devices.forEach(d => {
        d.addEventListener('mouseenter', () => toggleDeviceInfo(d, true));
        d.addEventListener('mouseleave', () => toggleDeviceInfo(d, false));

        // для мобильных — показать по клику (тоггл)
        d.addEventListener('click', (e) => {
            // предотвращаем двойное срабатывание при десктопе
            if (window.innerWidth < 900) {
                d.classList.toggle('show');
            }
        }, { passive: true });
    });

    // Toggle all hints
    let allShown = false;
    toggleAllBtn.addEventListener('click', () => {
        allShown = !allShown;
        devices.forEach(d => toggleDeviceInfo(d, allShown));
        toggleAllBtn.textContent = allShown ? 'Скрыть подсказки' : 'Показать все подсказки';
    });

    // Pulse network (анимация)
    pulseBtn.addEventListener('click', () => {
        network.classList.add('pulse');
        setTimeout(() => network.classList.remove('pulse'), 1000);
        // небольшая анимация линий
        lines.forEach(({ line }, i) => {
            line.style.opacity = '1';
            setTimeout(() => line.style.opacity = '0.75', 120 * i);
        });
    });

    // Обновляем линии после загрузки и при ресайзе (чтобы позиции корректно вычислялись)
    function refresh() {
        updateLines();
    }

    // Обновляем при загрузке, немного позже (чтобы верно посчитать размеры на мобильных)
    setTimeout(refresh, 50);
    window.addEventListener('resize', () => setTimeout(refresh, 80));
    // MutationObserver на случай изменений в DOM (например, при динамической вставке)
    const mo = new MutationObserver(() => setTimeout(refresh, 50));
    mo.observe(network, { childList: true, subtree: true });

    // initial
    refresh();
});
