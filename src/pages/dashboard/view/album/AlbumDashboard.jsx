import "./AlbumDashboard.css";
import ListAlbums from "./listAlbum/ListAlbums";
import CreateAlbum from "./createAlbum/CreateAlbum.jsx";
import EditAlbum from "./editAlbum/EditAlbum";
import DeleteAlbum from "./deleteAlbum/DeleteAlbum";
import { useContexAlbums } from "../../../../contexts/AlbumContextProvider";

const AlbumDashboard = () => {
  const { albums,isOpenSelectAlbums, setIsOpenSelectAlbums, setIsSelectedAllAlbums,closeAllOptions ,albumsSelected,
    setAlbumsSelected,views, setViews,albumSelectEdit} = useContexAlbums();

  const selectAllAlbums=()=>{
    setIsSelectedAllAlbums(true);
    const listInputsCheckbox=[...document.querySelectorAll(".input__checkbox")];
    for (let i = 0; i < listInputsCheckbox.length; i++) {
      const input = listInputsCheckbox[i];
      input.checked=true;
    }
    const allIdAlbumsSelected=[];
    for (let i = 0; i < listInputsCheckbox.length; i++) {
      const input = listInputsCheckbox[i];
      allIdAlbumsSelected.push(input.value);
    }
    setAlbumsSelected([...allIdAlbumsSelected]);

  }

  const enableSelectAlbum=()=>{
    setIsOpenSelectAlbums(true);
    closeAllOptions();
  }
  const disableSelectAlbum=()=>{
    setIsOpenSelectAlbums(false);
    setAlbumsSelected([])
  }

  return (
    <div className="container__dashboard album">
      <h2 className="album__title">Álbum</h2>

      {views.createAlbum === true || views.editAlbum === true  ? "" : (
        <>
          <div className="container__buttons__albums">
            {isOpenSelectAlbums===false? <button
              className="btn__create__album"
              onClick={() =>
                setViews({
                  ...views,
                  createAlbum: true,
                  editAlbum: false,
                  deleteAlbum: false,
                  listAlbum: false,
                })
              }
            >
              Crear álbum
            </button>:""}
            { albums.length>0 ?
              <div className="conatiner__options__select">

                {albumsSelected.length > 0 ? (
                  <button  className="button__recicle__albums__all btn__option__select">
                    Reciclar
                  </button>
                ) : (
                  ""
                )}

              {isOpenSelectAlbums === true ? (
                <button onClick={()=>selectAllAlbums()} className="button__select__albums__all btn__option__select">
                  Sel. Todo
                </button>
              ) : (
                ""
              )}


              {isOpenSelectAlbums === true ? (
                <button onClick={()=>disableSelectAlbum()} className="button__cancel__select btn__option__select">
                Cancelar
              </button>
              ) : (
                <button onClick={()=>enableSelectAlbum()} className="button__select__albums btn__option__select">
                  Seleccionar
                </button>
                
              )}
            </div>
            :""
            }
          </div>
        </>
      ) }

      {views.listAlbum === true ? (
        <ListAlbums />
      ) : views.createAlbum === true ? (
        <CreateAlbum />
      ) : views.editAlbum === true && albumSelectEdit !== null ? (
        <EditAlbum />
      ) : views.deleteAlbum === true ? (
        <DeleteAlbum/>
      ) : (
        ""
      )}
    </div>
  );
};

export default AlbumDashboard;
