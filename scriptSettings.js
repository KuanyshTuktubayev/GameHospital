document.addEventListener("DOMContentLoaded", function() {
    const openDialogButton = document.getElementById("openDialogButton");
    const resolutionDialog = document.getElementById("resolutionDialog");
    const resolutionsSelect = document.getElementById("resolutions");
    const applyResolutionButton = document.getElementById("applyResolutionButton");

    openDialogButton.addEventListener("click", function() {
        resolutionDialog.style.display = "block";
    });

    applyResolutionButton.addEventListener("click", function() {
        const selectedResolution = resolutionsSelect.value;
        // сохранить в localStorage
        localStorage.setItem("selectedResolution", selectedResolution);

        //resolutionDialog.style.display = "none";
		
		//window.location.href = "./game.html";
		window.location.href = `./game.html?resolution=${selectedResolution}`;
    });
});