window.generateOrderPdf = (orderData) => {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();
    doc.text("---Bestellung--------------------------------------" + "     Name: " + orderData.customerName, 10, 10);
    
    // Grossteil von KI, verstehe aber was hier passiert
    const countMap = orderData.drinks.reduce((acc, item) => {
        const drinkName = item.name; // Access the drink name
        acc[drinkName] = (acc[drinkName] || 0) + 1; // Increment the count
        return acc;
    }, {});
    
    let verticalOffset = 25;
    
    for (const [key, count] of Object.entries(countMap)) {
        doc.text(count + 'x ' + key, 30, verticalOffset)
        verticalOffset += 10;
    }
    // Ende von KI
    
    doc.text(orderData.cocktailName + ", zubereitet mit:", 20, 18)
    doc.text("---Bestell-ID: " + orderData.orderId.toString(), 10, 120)
    
    doc.save("Cocktail Bestellung.pdf");
};
