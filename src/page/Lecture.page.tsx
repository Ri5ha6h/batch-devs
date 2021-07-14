import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

interface Props {}

const Lecture: FC<Props> = (props) => {
  const { lectureNum, batchNum } = useParams<any>();

  return (
    <div>
      this is lecture <span className="text-blue-500">#{lectureNum}</span> of
      batch <span className="text-blue-500">#{batchNum}</span>
    </div>
  );
};

Lecture.defaultProps = {};

export default memo(Lecture);
