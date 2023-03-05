export const characterFactory = characterObject => ({
    ...characterObject,
    location: { x: 0, y: 0 },
    renderOnMap: function (location) {
        this.location = location;
        console.log(this);
    }
});
