import { PageTree } from "fumadocs-core/server";
import { LucideIcon } from "lucide-react";
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
	{
		title: "EC2",
		Icon: () => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.4em"
				height="1.4em"
				viewBox="0 0 24 24"
			>
				<path
					fill="currentColor"
					d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5l5 5z"
				/>
			</svg>
		),
		list: [
			{
				title: "Overview",
				href: "/docs/ec2/overview",
			},
			{
				title: "AWS CLI Commands",
				href: "/docs/ec2/commands-cli",
			},
			{
				title: "Architecture and Flows",
				href: "/docs/ec2/architecture-and-flows",
			},
			{
				title: "Best Practices",
				href: "/docs/ec2/best-practices",
			},
			{
				title: "Common Mistakes",
				href: "/docs/ec2/common-mistakes",
			},
			{
				title: "Costs",
				href: "/docs/ec2/costs",
			},
			{
				title: "Integration and Resources",
				href: "/docs/ec2/integration-and-resources",
			},
		],
	},
];