
const reviews = [
    {
        name: "Иван",
        text: "Эти фильмы - настоящая эпопея! История про борьбу добра и зла завораживает.",
        stars: 5
    },
    {
        name: "Мария",
        text: "Потрясающие спецэффекты, но немного затянутые сцены, особенно в 3 части.",
        stars: 4
    },
    {
        name: "Алексей",
        text: "Меня сильно разочаровал второй фильм. Сюжет слабый, слишком много лишних сцен.",
        stars: 2
    },
    {
        name: "Ольга",
        text: "Фильм идеально передает атмосферу Средиземья! Очень люблю эту трилогию.",
        stars: 5
    },
    {
        name: "Дмитрий",
        text: "Не понравилось, что фильм затянут. Иногда хочется перемотать.",
        stars: 3
    },
    {
        name: "Елена",
        text: "Отличный фильм! Сильно впечатлила игра актеров и визуальные эффекты.",
        stars: 4
    }
];

// Функция для отображения отзывов
function displayReviews(reviewsToShow) {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.innerHTML = ''; // Очищаем список перед вставкой новых отзывов

    reviewsToShow.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        reviewElement.innerHTML = `
            <h4>${review.name}</h4>
            <p>${review.text}</p>
            <div class="stars">${'⭐'.repeat(review.stars)}</div>
        `;

        reviewsList.appendChild(reviewElement);
    });
}

// Функция фильтрации отзывов
function filterReviews(type) {
    let filteredReviews = [];

    if (type === 'positive') {
        filteredReviews = reviews.filter(review => review.stars >= 4);
    } else if (type === 'negative') {
        filteredReviews = reviews.filter(review => review.stars < 4);
    } else {
        filteredReviews = reviews;
    }

    displayReviews(filteredReviews);
}

// Изначально показываем все отзывы
displayReviews(reviews);
