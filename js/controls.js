const controlsContent = `
    <div class="opacity-container bg-light p-3 rounded">

        <button class="btn btn-primary d-md-none w-100 mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#opacityControls" aria-expanded="false" aria-controls="opacityControls">
            Mostrar/Ocultar Opacidad de Capas
        </button>
        <div class="collapse d-md-block" id="opacityControls">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-4 mb-2 mb-md-0">
                        <label for="opacityStreamRange"><strong>Cursos de Agua:</strong></label>
                        <input type="range" id="opacityStreamRange" class="form-range" min="0" max="1" step="0.1" value="1">
                    </div>
                    <div class="col-12 col-md-4 mb-2 mb-md-0">
                        <label for="opacitySubBasinRange"><strong>SubCuencas:</strong></label>
                        <input type="range" id="opacitySubBasinRange" class="form-range" min="0" max="1" step="0.1" value="1">
                    </div>
                    <div class="col-12 col-md-4 mb-2 mb-md-0">
                        <label for="opacityBasinRange"><strong>Cuencas:</strong></label>
                        <input type="range" id="opacityBasinRange" class="form-range" min="0" max="1" step="0.1" value="1">
                    </div>
                </div>
            </div>
        </div>
    </div>
`;




const controlsContainer = document.querySelector('#controls');
controlsContainer.innerHTML = controlsContent;

