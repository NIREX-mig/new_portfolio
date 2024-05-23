
const ResumeCard = (props) => {
    const {session, company, address} = props;
  return (
    <article className="px-10 py-3 rounded-md my-2">
        <p className="text-sm ">{session}</p>
        <h3 className="text-lg font-semibold my-1">{company}</h3>
        <p className="text-sm">{address}</p>
    </article>
  )
}

export default ResumeCard
