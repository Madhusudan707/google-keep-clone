export const Loading = ({toggle="opacity-0"}) => {
  return (
      <div id='loader' className={`loader-modal h-72  w-full flex flex-row items-center justify-center ${toggle}`}>
          <i className="fas fa-sync fa-spin fa-5x"></i>
      </div>
  )
}
