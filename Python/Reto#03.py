def organize_inventory(inventory):
    organized_inventory = {}
    
    for item in inventory:
        if item["category"] not in organized_inventory:
            organized_inventory[item["category"]] = {}
        if item["name"] not in organized_inventory[item["category"]]:
            organized_inventory[item["category"]][item["name"]] = 0
        organized_inventory[item["category"]][item["name"]] += item["quantity"]
        
    return organized_inventory
