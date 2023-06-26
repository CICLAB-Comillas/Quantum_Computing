// Versión 3.0

// eslint-disable-next-line no-unused-vars
// import React, { useRef, useState } from 'react';
// import PropTypes from "prop-types";

// export const UploadButton = ({ tagText = "UPLOAD A FILE", hover }) => {
//     const fileInputRef = useRef(null);
//     const [selectedFile, setSelectedFile] = useState(null);

//     const handleClick = () => {
//         fileInputRef.current.click();
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setSelectedFile(file);

//         const reader = new FileReader();
//         reader.onload = () => {
//             const fileContent = reader.result;
//             // Aquí puedes hacer algo con el contenido del archivo, como mostrarlo en la interfaz de usuario.
//             console.log(fileContent);
//         };
//         reader.readAsText(file);
//         // Llama a una función de exportación con el archivo seleccionado
//         exportFile(file);



//     };
//     const exportFile = (file) => {
//         // Realiza acciones adicionales con el archivo seleccionado en otra parte del código
//         console.log('Archivo exportado:', file);
//         // Puedes pasar el archivo a otro componente, guardar en el estado global, enviar a través de una solicitud AJAX, etc.
//     };

//     return (
//         <div>
//             <button onClick={handleClick} className="tag">
//                 <div className="tag-text">{tagText}</div>
//             </button>

//             <input
//                 ref={fileInputRef}
//                 type="file"
//                 accept=".mp3, .mp4, .svg, .wav, .flac, .aac, .m4a, .ogg, .aiff, .aif, .weba"
//                 style={{ display: 'none' }}
//                 onChange={handleFileChange}
//             />
//             {selectedFile && (
//                 <div >
//                     <h4>Selected File:</h4>
//                     <p className={"fileDisplay"}>{selectedFile.name}</p>
//                     {/* <p>Tipo: {selectedFile.type}</p>
//                         <p>Tamaño: {selectedFile.size} bytes</p> */}
//                 </div>
//             )}
//         </div>
//     );
// };

// UploadButton.propTypes = {
//     text: PropTypes.string,
//     tagText: PropTypes.string,
//     hover: PropTypes.bool,
// };


// VERSIÓN 4.0 
import React, { useRef, useState } from 'react';
import PropTypes from "prop-types";

export const UploadButton = ({ tagText = "UPLOAD A FILE", hover }) => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUrl, setFileUrl] = useState('');

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onload = () => {
            const fileContent = reader.result;
            // Aquí puedes hacer algo con el contenido del archivo, como mostrarlo en la interfaz de usuario.
            console.log(fileContent);
        };
        reader.readAsText(file);

        // Guarda el archivo como una URL
        const fileUrl = URL.createObjectURL(file);
        setFileUrl(fileUrl);

        // Llama a una función de exportación con la URL del archivo
        exportFileUrl(fileUrl);
    };

    const exportFileUrl = (url) => {
        // Realiza acciones adicionales con la URL del archivo en otra parte del código
        console.log('URL del archivo exportada:', url);
        // Puedes pasar la URL del archivo a otro componente, guardarla en el estado global, enviarla a través de una solicitud AJAX, etc.
    };

    return (
        <div>
            <button onClick={handleClick} className="tag">
                <div className="tag-text">{tagText}</div>
            </button>

            <input
                ref={fileInputRef}
                type="file"
                accept=".mp3, .mp4, .svg, .wav, .flac, .aac, .m4a, .ogg, .aiff, .aif, .weba"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            {selectedFile && (
                <div>
                    <h4>Selected File:</h4>
                    <p className={"fileDisplay"}>{selectedFile.name}</p>
                </div>
            )}

            {fileUrl && (
                <div>
                    <h4>File URL:</h4>
                    <p>{fileUrl}</p>
                </div>
            )}
        </div>
    );
};

UploadButton.propTypes = {
    text: PropTypes.string,
    tagText: PropTypes.string,
    hover: PropTypes.bool,
};
