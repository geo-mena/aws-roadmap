import { PageTree } from "fumadocs-core/server";
import {
	Binoculars,
	Book,
	CircleHelp,
	Database,
	Gauge,
	Key,
	KeyRound,
	LucideAArrowDown,
	LucideIcon,
	Mail,
	Mailbox,
	Phone,
	ScanFace,
	ShieldCheck,
	UserCircle,
	UserSquare2,
	Users2,
} from "lucide-react";
import { ReactNode, SVGProps } from "react";

interface Content {
	title: string;
	href?: string;
	Icon: ((props?: SVGProps<any>) => ReactNode) | LucideIcon;
	isNew?: boolean;
	list: {
		title: string;
		href: string;
		group?: boolean;
		isNew?: boolean;
	}[];
}

export function getPageTree(): PageTree.Root {
	return {
		$id: "root",
		name: "docs",
		children: [
			{
				type: "folder",
				root: true,
				name: "Docs",
				description: "get started, concepts, and plugins.",
				children: contents.map(contentToPageTree),
			},
		],
	};
}

function contentToPageTree(content: Content): PageTree.Folder {
	return {
		type: "folder",
		icon: <content.Icon />,
		name: content.title,
		index: content.href
			? {
					icon: <content.Icon />,
					name: content.title,
					type: "page",
					url: content.href,
				}
			: undefined,
		children: content.list.map((item) => ({
			type: "page",
			url: item.href,
			name: item.title,
		})),
	};
}

export const contents: Content[] = [
	{
		title: "Get Started",
		Icon: () => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.4em"
				height="1.4em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 14H9V8h2zm1 0V8l5 4z"
				/>
			</svg>
		),
		list: [
			{
				title: "Introduction",
				href: "/docs/introduction",
			},
		],
	},
];