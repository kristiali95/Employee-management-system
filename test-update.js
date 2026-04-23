const prisma = require('./utils/prisma');

async function testUpdate() {
    try {
        console.log('Before update:');
        const before = await prisma.department.findUnique({ where: { id: 2 } });
        console.log(before);

        console.log('\nUpdating...');
        const updated = await prisma.department.update({
            where: { id: 2 },
            data: { name: 'TEST UPDATE' }
        });
        console.log('Update result:', updated);

        console.log('\nAfter update:');
        const after = await prisma.department.findUnique({ where: { id: 2 } });
        console.log(after);

        await prisma.$disconnect();
    } catch (error) {
        console.error('Error:', error);
        await prisma.$disconnect();
    }
}

testUpdate();
