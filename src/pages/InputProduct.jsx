import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import { MDBBtn } from "mdbreact";
import "../css/FormBiodata.css";
import { connect } from "react-redux";
import { doLogin, doSignOut } from "../store/action/actionUser";
import {
  inputProdukSeller,
  changeInputProduct,
} from "../store/action/actionProduct";
import $ from "jquery";

class InputProduct extends React.Component {
  inputProduk = async () => {
    await this.props.inputProdukSeller();
    this.props.statusError
      ? alert("anda gagal mengedit profile!")
      : this.props.history.push("/");
  };

  componentDidMount = () => {
    $(function () {
      let native_width = 0;
      let native_height = 0;
      let mouse = { x: 0, y: 0 };
      let magnify;
      let cur_img;

      let ui = {
        magniflier: $(".magniflier"),
      };
      if (ui.magniflier.length) {
        let div = document.createElement("div");
        div.setAttribute("class", "glass");
        ui.glass = $(div);

        $("body").append(div);
      }

      // All the magnifying will happen on "mousemove"

      let mouseMove = function (e) {
        let $el = $(this);

        // Container offset relative to document
        let magnify_offset = cur_img.offset();

        // Mouse position relative to container
        // pageX/pageY - container's offsetLeft/offetTop
        mouse.x = e.pageX - magnify_offset.left;
        mouse.y = e.pageY - magnify_offset.top;

        // The Magnifying glass should only show up when the mouse is inside
        // It is important to note that attaching mouseout and then hiding
        // the glass wont work cuz mouse will never be out due to the glass
        // being inside the parent and having a higher z-index (positioned above)
        if (
          mouse.x < cur_img.width() &&
          mouse.y < cur_img.height() &&
          mouse.x > 0 &&
          mouse.y > 0
        ) {
          magnify(e);
        } else {
          ui.glass.fadeOut(100);
        }

        return;
      };

      magnify = function (e) {
        // The background position of div.glass will be
        // changed according to the position
        // of the mouse over the img.magniflier
        //
        // So we will get the ratio of the pixel
        // under the mouse with respect
        // to the image and use that to position the
        // large image inside the magnifying glass

        let rx =
          Math.round(
            (mouse.x / cur_img.width()) * native_width - ui.glass.width() / 2
          ) * -1;
        let ry =
          Math.round(
            (mouse.y / cur_img.height()) * native_height - ui.glass.height() / 2
          ) * -1;
        let bg_pos = rx + "px " + ry + "px";

        // Calculate pos for magnifying glass
        //
        // Easy Logic: Deduct half of width/height
        // from mouse pos.

        // let glass_left = mouse.x - ui.glass.width() / 2;
        // let glass_top  = mouse.y - ui.glass.height() / 2;
        let glass_left = e.pageX - ui.glass.width() / 2;
        let glass_top = e.pageY - ui.glass.height() / 2;
        //console.log(glass_left, glass_top, bg_pos)
        // Now, if you hover on the image, you should
        // see the magnifying glass in action
        ui.glass.css({
          left: glass_left,
          top: glass_top,
          backgroundPosition: bg_pos,
        });

        return;
      };

      $(".magniflier").on("mousemove", function () {
        ui.glass.fadeIn(200);

        cur_img = $(this);

        let large_img_loaded = cur_img.data("large-img-loaded");
        let src = cur_img.data("large") || cur_img.attr("src");

        // Set large-img-loaded to true
        // cur_img.data('large-img-loaded', true)

        if (src) {
          ui.glass.css({
            "background-image": "url(" + src + ")",
            "background-repeat": "no-repeat",
          });
        }

        // When the user hovers on the image, the script will first calculate
        // the native dimensions if they don't exist. Only after the native dimensions
        // are available, the script will show the zoomed version.
        //if(!native_width && !native_height) {

        if (!cur_img.data("native_width")) {
          // This will create a new image object with the same image as that in .small
          // We cannot directly get the dimensions from .small because of the
          // width specified to 200px in the html. To get the actual dimensions we have
          // created this image object.
          let image_object = new Image();

          image_object.onload = function () {
            // This code is wrapped in the .load function which is important.
            // width and height of the object would return 0 if accessed before
            // the image gets loaded.
            native_width = image_object.width;
            native_height = image_object.height;

            cur_img.data("native_width", native_width);
            cur_img.data("native_height", native_height);

            //console.log(native_width, native_height);

            mouseMove.apply(this, arguments);

            ui.glass.on("mousemove", mouseMove);
          };

          image_object.src = src;

          return;
        } else {
          native_width = cur_img.data("native_width");
          native_height = cur_img.data("native_height");
        }
        //}
        //console.log(native_width, native_height);

        mouseMove.apply(this, arguments);

        ui.glass.on("mousemove", mouseMove);
      });

      ui.glass.on("mouseout", function () {
        ui.glass.off("mousemove", mouseMove);
      });
    });
  };

  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mt-5">Form Input Produk</h3>
              <form>
                <div className="form-group">
                  <label for="formGroupExampleInput" id="label">
                    Nama Produk
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Nama..."
                    name="namaProduk"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput" id="label">
                    Harga
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Harga..."
                    name="harga"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput" id="label">
                    Warna
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Warna..."
                    name="warna"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="formGroupExampleInput" id="label">
                    Berat Produk
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Berat Produk..."
                    name="beratProduk"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
              </form>
              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Kategori Product
                </label>
                <div className="row ml-3">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kategori"
                      id="inlineRadio1"
                      value="kemeja"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                    <label
                      class="form-check-label"
                      for="inlineRadio1"
                      id="label"
                    >
                      Kemeja
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kategori"
                      id="inlineRadio2"
                      value="celana"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                    <label
                      class="form-check-label"
                      for="inlineRadio2"
                      id="label"
                    >
                      Celana
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kategori"
                      id="inlineRadio3"
                      value="sepatu"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                    <label
                      class="form-check-label"
                      for="inlineRadio3"
                      id="label"
                    >
                      Sepatu
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mt-sm-5">
              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Ukuran
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Ukuran.."
                  name="ukuran"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Stock.."
                  name="stock"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Promo
                </label>
                <div className="row ml-3">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="promo"
                      id="inlineRadio1"
                      value="true"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Ya
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="promo"
                      id="inlineRadio2"
                      value="false"
                      onChange={(e) => this.props.changeInput(e)}
                    />
                    <label
                      class="form-check-label"
                      for="inlineRadio2"
                      id="label"
                    >
                      Tidak
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Discount
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Discount..."
                  name="diskon"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>

              <div className="form-group">
                <label for="formGroupExampleInput" id="label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="URL image..."
                  name="image"
                  onChange={(e) => this.props.changeInput(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center justify-content-center">
              <MDBBtn color="secondary" onClick={() => this.inputProduk()}>
                Submit
              </MDBBtn>
            </div>
          </div>
        </div>
        <img
          className="magniflier"
          src="https://localcdn.tinkerlust.com/media/catalog/product/cache/1/image/265x/9df78eab33525d08d6e5fb8d27136e95/I/M/IMG_0015_601.jpg"
          width="200"
          alt="xx"
        />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    statusError: state.product.statusError,
  };
};
const mapDispatchToProps = {
  changeInput: (e) => changeInputProduct(e),
  doLogin,
  doSignOut,
  inputProdukSeller,
};
export default connect(mapStateToProps, mapDispatchToProps)(InputProduct);
// export default InputProduct;
