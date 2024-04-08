'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function NavbarMenu() {
  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent w-[118px]">
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-3 w-[350px] md:w-[380px] grid-cols-[.7fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-center rounded-md bg-muted p-4 no-underline outline-none focus:shadow-md"
                    href="/projects"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      All projects
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      View a list of all of our projects.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/projects/amicorn" title="AMICORC">
                Real time online emotion recognition robot.
              </ListItem>
              <ListItem
                href="/projects/cartesian-coordinate-robot"
                title="Cartesian robot"
              >
                Cartesian coordinate robot project.
              </ListItem>
              <ListItem
                target="_blank"
                href="https://repozitorij.fsb.unizg.hr/islandora/search/tomislav%20stipan%C4%8Di%C4%87?type=dismax"
                title="Student projects"
              >
                View projects of our students.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent w-[118px]">
            Curriculum
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[320px] gap-3 p-4 md:grid-cols-1">
              <ListItem title="Study of mechatronics and robotics" href="/">
                MIR smjer tekst.
              </ListItem>
              <ListItem title="Graduate studies" href="/">
                Graduate studies text.{' '}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/news" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({ className: 'w-[90px]' })}
            >
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/gallery" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({ className: 'w-[90px]' })}
            >
              Gallery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle({ className: 'w-[90px]' })}
            >
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href ? href : '/'}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
