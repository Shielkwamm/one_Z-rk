import React from 'react';
import { Components, registerComponent, withSingle2 } from 'meteor/vulcan:core';
import { withRouter } from 'react-router';

//## HACKY - hidden input field but using for copy to clip board

const RoomOperat0rInner = ({ loading, document }) => (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
        <Components.HeadTags title={`operat0r`}/>
        {document.i18nRooms.map( ir => (
          <h2 key={ir.i18n._id}>
            {ir.i18n.glyphSet.split(" ").map((glyph, index) => (
              <span onClick={e => {window.document.querySelector("#z" + ir.i18n._id + "_" + index).select(), window.document.execCommand("copy")}} key={ir.i18n._id + "_" + index}>{glyph} <input style={{position: "absolute", top: "-200px", left: "-200px"}} id={"z" + ir.i18n._id + "_" + index} defaultValue={glyph}/></span>
            ))}
          </h2>
        ))}
        <hr></hr>
        <h2>△áìéïḱḿí△ △Ńń△ ▵ÖöÓóÒòÔôḱ▵</h2>
        <hr></hr>
        {document.roomHandles.map((rh, index) => (
          <h2 onClick={e => {window.document.querySelector("#z" + rh._id + "_" + index).select();window.document.execCommand("copy")}} key={rh._id}>{rh.handle.name} <input style={{position: "absolute", top: "-200px", left: "-200px"}} id={"z" + rh._id + "_" + index} defaultValue={rh.handle.name}/></h2>
        ))}
      </div>
    )}
  </React.Fragment>
)

const options = {
  collectionName: "Rooms",
  fragmentName: 'RoomOperat0r',
}

registerComponent( {name: 'RoomOperat0rInner', component: RoomOperat0rInner, hocs: [[withSingle2, options]]})

const RoomOperat0r = ({ match }) => (
  <Components.RoomOperat0rInner input={{selector: {slug: match.params.slug}}}/>
);

registerComponent({ name: 'RoomOperat0r', component: RoomOperat0r, hocs: [withRouter]});

/*
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
*/