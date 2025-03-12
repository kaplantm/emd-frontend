import Link from "../Link";

const CreditCardValidatorInfo = () => {
  return (
    <div className="mt-8 p-4 bg-white rounded-xl text-sm text-gray-600 max-h-[200px] overflow-y-auto">
      <p className="font-medium text-brand-dark-green mb-2">About this page</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>React frontend with Vite, Typescript and TailwindCSS</li>
        <li>NestJS Backend</li>
        <li>Setup as a monorepo using npm workspaces and Turbo</li>
        <li>
          Created by{" "}
          <Link href="https://github.com/kaplantm" target="_blank">
            Toni Kaplan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CreditCardValidatorInfo;
