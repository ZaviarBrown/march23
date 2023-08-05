SELECT tools.name, purchases.quantity FROM purchases
JOIN tools ON (purchases.tool_id = tools.id)
ORDER BY tools.name, purchases.quantity;