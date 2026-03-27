"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SideNavigation.module.css";

export function SideNavigation() {
	const currentPath = usePathname();
	const linkClass = (href: string) =>
		currentPath === href ? `${styles.link} ${styles.selected}` : styles.link;

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li>
					<Link className={linkClass("/")} href="/">
						Home
					</Link>
				</li>
				<li>
					<Link
						className={linkClass("/projects/project-1")}
						href="/projects/project-1"
					>
						Sample Project
					</Link>
					<ul className={styles.list}>
						<li>
							<Link
								className={linkClass("/projects/project-1/tasks/task-1")}
								href="/projects/project-1/tasks/task-1"
							>
								Task 1
							</Link>
							<ul className={styles.list}>
								<li>
									<Link
										className={linkClass(
											"/projects/project-1/tasks/task-1/sub-tasks/sub-task-1",
										)}
										href="/projects/project-1/tasks/task-1/sub-tasks/sub-task-1"
									>
										SubTask 1-1
									</Link>
								</li>
								<li>
									<Link
										className={linkClass(
											"/projects/project-1/tasks/task-1/sub-tasks/sub-task-2",
										)}
										href="/projects/project-1/tasks/task-1/sub-tasks/sub-task-2"
									>
										SubTask 1-2
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link
								className={linkClass("/projects/project-1/tasks/task-2")}
								href="/projects/project-1/tasks/task-2"
							>
								Task 2
							</Link>
							<ul className={styles.list}>
								<li>
									<Link
										className={linkClass(
											"/projects/project-1/tasks/task-2/sub-tasks/sub-task-1",
										)}
										href="/projects/project-1/tasks/task-2/sub-tasks/sub-task-1"
									>
										SubTask 2-1
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}
