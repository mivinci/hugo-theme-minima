import { setup_theme_switch } from "./theme"
import { fix_checkbox_list_style } from "./style"
import { setup_selectable } from './selectable'


setup_theme_switch('theme-switch')
setup_selectable()
fix_checkbox_list_style('.md ul')