const LectureCards = ({ FetchingLecture }) => {

  console.log(FetchingLecture)

  function formatDate(dateString) {
    const date = new Date(dateString);
  
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  return (
    <>
      {FetchingLecture.map((item) => (
        <tbody>
          <tr class="bg-white border-b text-gray-950 text-[18px]  dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.course}
            </th>
            <td class="px-6 py-4">{item.instructor}</td>
            <td class="px-6 py-4">{formatDate(item.date)}</td>
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default LectureCards;
