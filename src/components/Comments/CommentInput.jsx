import { useState } from "react";
import Button from "../Button";
import localUser from "../../utils/localUser";
import Articles from "../../network/Articles";
import Alert from "../Alert/Alert";
import LoadingSpin from "../Loading/LoadingSpin";
import { setErrorMessage } from "../../utils/errorHandler";

const CommentInput = (props) => {
  const { articleId } = props;
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const submitCommentHandler = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      const localUserData = localUser.get();
      if (!localUserData) {
        throw new Error("User not logged in");
      }

      const comment = event.target.commentInput.value;
      const userId = localUserData.id;
      const responseData = await Articles.addComment(articleId, userId, comment);

      setLoading(false);
      setIsError(false);
      setMessage("Berhasil mengirim komentar");

      console.log(responseData);
      event.target.commentInput.value = "";
      window.dispatchEvent(new Event("refreshArticle"));
    } catch (error) {
      setLoading(false);
      setIsError(true);

      setMessage(setErrorMessage(error));
    }
  };

  return (
    <>
      <form onSubmit={submitCommentHandler} className="flex flex-col gap-3 px-5 pb-10 md:px-20">
        <h1 className="my-5  text-3xl font-bold text-tertiary">Komentar</h1>
        <div className="relative" data-twe-input-wrapper-init>
          <textarea
            className="peer block min-h-[auto] w-full rounded border-1 bg-slate-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            name="commentInput"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>

        {message && (
          <Alert
            isError={isError}
            message={message}
            setIsError={setIsError}
            setMessage={setMessage}
          />
        )}

        <Button classname="bg-primary w-full">
          {loading ? <LoadingSpin color="white" /> : "Kirim"}
        </Button>
      </form>
    </>
  );
};

export default CommentInput;
