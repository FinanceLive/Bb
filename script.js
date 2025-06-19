document.addEventListener('DOMContentLoaded', function() {
    // إظهار رسالة ترحيبية
    setTimeout(() => {
        alert('مرحباً بك في "شهريتي"! أدخل بياناتك المالية لتحصل على تحليل لميزانيتك الشهرية.');
    }, 500);
});

function calculateBudget() {
    // الحصول على القيم من المدخلات
    const income = parseFloat(document.getElementById('income').value) || 0;
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const utilities = parseFloat(document.getElementById('utilities').value) || 0;
    const transportation = parseFloat(document.getElementById('transportation').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;
    const other = parseFloat(document.getElementById('other').value) || 0;
    
    // حساب إجمالي النفقات
    const totalExpenses = rent + utilities + transportation + food + other;
    
    // حساب المدخرات/العجز
    const savings = income - totalExpenses;
    
    // عرض النتائج
    document.getElementById('total-income').textContent = income.toLocaleString('ar-SA') + ' ريال';
    document.getElementById('total-expenses').textContent = totalExpenses.toLocaleString('ar-SA') + ' ريال';
    
    const savingsElement = document.getElementById('savings');
    savingsElement.textContent = savings.toLocaleString('ar-SA') + ' ريال';
    
    // تغيير لون المدخرات بناء على القيمة
    if (savings > 0) {
        savingsElement.style.color = 'var(--success-color)';
    } else if (savings < 0) {
        savingsElement.style.color = 'var(--danger-color)';
    } else {
        savingsElement.style.color = 'var(--warning-color)';
    }
    
    // تقديم نصيحة بناء على النتائج
    let advice = "";
    if (savings > (income * 0.2)) {
        advice = "ممتاز! أنت توفر أكثر من 20% من دخلك. هذا المستوى من الادخار ممتاز ويسمح لك ببناء ثروة مع الوقت.";
    } else if (savings > 0) {
        advice = "جيد! لديك فائض في الميزانية. حاول زيادة نسبة الادخار إلى 20% من دخلك للاستفادة القصوى.";
    } else if (savings === 0) {
        advice = "ميزانيتك متوازنة ولكن بدون مدخرات. يُنصح بتقليل بعض النفقات غير الضرورية لإنشاء مدخرات طارئة.";
    } else if (savings >= (income * -0.1)) {
        advice = "لديك عجز بسيط. حاول تقليل النفقات غير الأساسية أو البحث عن مصادر دخل إضافية.";
    } else {
        advice = "تحذير! لديك عجز كبير في الميزانية. يُنصح بمراجعة ميزانيتك بعناية وربما استشارة خبير مالي.";
    }
    
    document.getElementById('advice-text').textContent = advice;
    
    // إظهار قسم النتائج
    document.getElementById('result').style.display = 'block';
    
    // التمرير إلى النتائج
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}
