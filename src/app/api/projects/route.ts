import { projects } from '@/assets/data/project.data';
import { NextResponse } from 'next/server';

export async function GET() {
	return NextResponse.json(projects);
}
