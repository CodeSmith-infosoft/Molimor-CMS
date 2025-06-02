import { BsDownload } from "react-icons/bs";
import { FaCaretRight, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

type PageTitleType = {
  title: string;
  subTitle?: string;
  cancelBtn?: boolean;
  openCategories?: () => void;
  button?: string;
  path?: string;
  onSubmit?: (data: any) => void;
  onCancel?: () => void; 
};

const PageTitle = ({
  path,
  title,
  subTitle,
  cancelBtn,
  button,
  openCategories,
  onSubmit,
  onCancel
}: PageTitleType) => {
  return (
    <section className="page-title">
      <div className="title">
        <h2>{title}</h2>
        <div className="sub-title">
          <Link to="/">
            {" "}
            <span className="sub-title-1">Dashboard</span>
          </Link>
          {subTitle && (
            <>
              <FaCaretRight />
              <span className="sub-title-1">{subTitle}</span>
            </>
          )}
          <FaCaretRight />
          <span>{title}</span>
        </div>
      </div>
      <div className="title-btn">
        {cancelBtn ? (
          <>
            <Link to="/product">
              {" "}
              <button className="btn-1-cancel">Cancel</button>
            </Link>
            <button className="btn-1-save" onClick={onSubmit}>
              Save
            </button>
          </>
        ) : button === "subCategories" ? (
          <>
            <button className="btn-1-cancel" onClick={onCancel}>
              Cancel{" "}
            </button>
            <button onClick={onSubmit}>
              Save{" "}
            </button>
          </>
        ) : (
          <>
            <Link to="">
              {" "}
              <button className="btn-1">
                <BsDownload /> Export{" "}
              </button>
            </Link>
            {path ? (
              <Link rel="stylesheet" to={path}>
                {" "}
                <button>
                  <FaPlus /> Add {button}{" "}
                </button>{" "}
              </Link>
            ) : (
              <button onClick={openCategories}>
                <FaPlus /> Add {button}{" "}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PageTitle;
