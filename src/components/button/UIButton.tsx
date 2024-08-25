import { NavLink } from 'react-router-dom'
import styles from './uibutton.module.scss'
import clsx from "clsx";


type UIButtonProps = {
	children: React.ReactNode | string
	title?: string
	onClick?: () => void
	type?: 'submit' | 'reset'
	disabled?: boolean
	to?: string | null
	backgroundColor?: string
	color?: string
	backgroundHoverColor?: string
	colorHover?: string
	borderColor?: string
	paddingTop?: number
	paddingAside?: number
	img?: string
	borderRadius?: number
	imgBefore?: string
	className?: string
	textAlign?: string,
	state?: any
}

export const UIButton = ({
	children = '',
	onClick = () => {},
	type = 'submit',
	disabled = false,
	to = null,
	backgroundColor = 'soft-pink',
	color = 'white',
	backgroundHoverColor = 'pink',
	colorHover = 'white',
	borderColor = 'none',
	paddingTop = 10,
	paddingAside = 20,
	img = '',
	borderRadius = 10,
	title = '',
	className = '',
	textAlign = 'center',
	imgBefore = '',
	state
}: UIButtonProps) => {
	className = clsx(
		styles.button,
		className,
		{ [styles.disabled]: disabled },
		styles[`background-${backgroundColor}`],
		styles[`color-${color}`],
		styles[`background-hover-${backgroundHoverColor}`],
		styles[`color-hover-${colorHover}`],
		styles[`border-${borderColor}`],
		styles[`padding-top-${paddingTop}`],
		styles[`padding-aside-${paddingAside}`],
		 img!=='' && styles[`img`],
		imgBefore!=='' && styles[`img-before-${imgBefore}`],
		imgBefore!=='' && styles[`img-before`],
		img!=='' && styles[`img-${img}`],
		styles[`border-radius-${borderRadius}`],
			styles[`text-align-${textAlign}`]
	);
	title = title || (children || '').toString()
	return to ? (
		<NavLink
			to={to}
			className={className}
			title={title}
			aria-label={title}
			onClick={onClick}
			state={state}
		>
			{children}
		</NavLink>
	) : (
		<button
			aria-label={title}
			onClick={onClick}
			type={type}
			className={className}
			disabled={disabled}
			title={title}

		>
			{children}
		</button>
	)
}
