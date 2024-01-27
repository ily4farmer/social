import { User } from '~features/user/User';

const page = ({ params }: { params: { id: string } }) => <User id={params.id} />;

export default page;
