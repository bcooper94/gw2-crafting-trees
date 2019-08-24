class Item {
    constructor(itemData) {
        this.id = itemData.id;
        this.chatLink = itemData.chat_link;
        this.name = itemData.name;
        this.icon = itemData.icon;
        this.description = itemData.description;
        this.type = itemData.type;
        this.rarity = itemData.rarity;
        this.level = itemData.level;
        this.vendorValue = itemData.vendor_value;
        this.defaultSkin = itemData.default_skin;
        this.flags = itemData.flags;
        this.gameTypes = itemData.gameTypes;
        this.restrictions = itemData.restrictions;

        // TODO: make an object for details
        this.details = itemData.details;
    }

    toJson() {
        return {
            id: this.id,
            chatLink: this.chatLink,
            name: this.name,
            icon: this.icon,
            description: this.description,
            type: this.type,
            rarity: this.rarity,
            level: this.level,
            vendorValue: this.vendorValue,
            defaultSkin: this.defaultSkin,
            flags: this.flags,
            gameTypes: this.gameTypes,
            restrictions: this.restrictions,
            details: this.details,
        };
    }
}

module.exports = Item;
